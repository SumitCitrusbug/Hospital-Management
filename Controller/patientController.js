const Patient = require("../Models/patientModel");

const createPatient = async (req, res) => {
  try {
    const { name, dateOfBirth, gender, contactNumber, address } = req.body;
    const patient = await Patient.create({
      name,
      dateOfBirth,
      gender,
      contactNumber,
      address,
      userId: req.userId,
    });
    res.status(201).json({ message: "Patient created successfully", patient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.errors[0].message });
  }
};

const getPatient = async (req, res) => {
  try {
    const patient = await Patient.findAll();
    res.status(200).json({ message: "Patient fetched successfully", patient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, dateOfBirth, gender, contactNumber, address } = req.body;
    const patient = await Patient.findByPk(id);
    console.log("name",);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    await patient.update({
      name,
      dateOfBirth,
      gender,
      contactNumber,

      address,
    });
    res.status(200).json({ message: "Patient updated successfully", patient });
  } catch (error) {}
};
const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findByPk(id);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    await patient.destroy();
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createPatient,
  getPatient,
  updatePatient,
  deletePatient,
};
