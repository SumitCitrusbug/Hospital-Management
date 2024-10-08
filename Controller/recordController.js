const MedicalRecord = require("../Models/medicalRecordModel");
const Patient = require("../Models/patientModel");
const Doctor = require("../Models/doctorModel");
const { createRecordSchema } = require("../Validation/recordValidation");
const { z } = require("zod");
const { formatZodError } = require("../utiles/zoderror.js");
const createMedicalRecord = async (req, res) => {
  try {
    const validatedData = createRecordSchema.parse(req.body);
    const { recordDate, description, patientId, doctorId } = validatedData;
    const medicalRecord = await MedicalRecord.create({
      recordDate,
      description,
      patientId,
      doctorId,
    });
    res
      .status(201)
      .json({ message: "Medical record created successfully", medicalRecord });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = formatZodError(error.errors);
      return res.status(400).json({ errors: formattedErrors });
    }
    console.error(error);
    res.status(500).json({ error: error.errors[0].message });
  }
};

const getMedicalRecord = async (req, res) => {
  try {
    const medicalRecord = await MedicalRecord.findAll({
      include: [Patient, Doctor],
    });
    res
      .status(200)
      .json({ message: "Medical record fetched successfully", medicalRecord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getMedicalRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const medicalRecord = await MedicalRecord.findAll({
      where: { id },
      include: [Patient, Doctor],
    });
    if (!medicalRecord) {
      return res.status(404).json({ error: "Medical record not found" });
    }
    res
      .status(200)
      .json({ message: "Medical record fetched successfully", medicalRecord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.errors[0].message });
  }
};

const updateMedicalRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const validatedData = createRecordSchema.parse(req.body);
    const { recordDate, description, patientId, doctorId } = validatedData;

    const medicalRecord = await MedicalRecord.findByPk(id);
    if (!medicalRecord) {
      return res.status(404).json({ error: "Medical record not found" });
    }
    await medicalRecord.update({
      recordDate,
      description,
      patientId,
      doctorId,
    });
    res
      .status(200)
      .json({ message: "Medical record updated successfully", medicalRecord });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = formatZodError(error.errors);
      return res.status(400).json({ errors: formattedErrors });
    }
    console.error(error);
    res.status(500).json({ error: error.errors[0].message });
  }
};

const deleteMedicalRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const medicalRecord = await MedicalRecord.findByPk(id);
    if (!medicalRecord) {
      return res.status(404).json({ error: "Medical record not found" });
    }
    await medicalRecord.destroy();
    res.status(200).json({ message: "Medical record deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createMedicalRecord,
  getMedicalRecord,
  updateMedicalRecord,
  deleteMedicalRecord,
  getMedicalRecordById,
};
