const Doctor = require("../Models/doctorModel");
const {
  createDoctorSchema,
  updateDoctorSchema,
} = require("../Validation/doctorValidation");
const { z } = require("zod");
const { formatZodError } = require("../utiles/zoderror.js");

const createDoctor = async (req, res) => {
  try {
    const validatedData = createDoctorSchema.parse(req.body);
    const { name, specialization, contactNumber } = validatedData;
    const doctor = await Doctor.create({
      name,
      specialization,
      contactNumber,
      userId: req.userId,
    });
    res.status(201).json({ message: "Doctor created successfully", doctor });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = formatZodError(error.errors);
      return res.status(400).json({ errors: formattedErrors });
    }

    res.status(500).json({ error: error.errors[0].message });
  }
};

const getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findAll();
    res.status(200).json({ message: "Doctor fetched successfully", doctor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.errors[0].message });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const validatedData = updateDoctorSchema.parse(req.body);
    const { name, specialization, contactNumber } = validatedData;
    const doctor = await Doctor.findByPk(id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }
    await doctor.update({
      name,
      specialization,
      contactNumber,
    });
    res.status(200).json({ message: "Doctor updated successfully", doctor });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = formatZodError(error.errors);
      return res.status(400).json({ errors: formattedErrors });
    }

    res.status(500).json({ error: error.errors[0].message });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findByPk(id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }
    await MedicalRecord.destroy({ where: { doctorId: id } });
    await doctor.destroy();
    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.errors[0].message });
  }
};
module.exports = {
  createDoctor,
  getDoctor,
  updateDoctor,
  deleteDoctor,
};
