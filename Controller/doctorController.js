const Doctor = require("../Models/doctorModel");

const createDoctor = async (req, res) => {
  try {
    const { name, specialization, contactNumber } = req.body;
    const doctor = await Doctor.create({
      name,
      specialization,
      contactNumber,
      userId: req.userId,
    });
    res.status(201).json({ message: "Doctor created successfully", doctor });
  } catch (error) {
    console.error(error);
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
    const { name, specialization, contactNumber } = req.body;
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
    console.error(error);
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
