const express = require("express");
const router = express.Router();
const {
  createPatient,
  getPatient,
  updatePatient,
  deletePatient,
} = require("../Controller/patientController.js");

//Authentication
const { verifyToken } = require("../middelware/authMiddelware.js");

router.post("/create", createPatient);
router.get("/getall", getPatient);
router.put("/update/:id", updatePatient);
router.delete("/delete/:id", deletePatient);

module.exports = router;
