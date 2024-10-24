const express = require("express");
const router = express.Router();

const {
  createMedicalRecord,
  getMedicalRecord,
  updateMedicalRecord,
  deleteMedicalRecord,
  getMedicalRecordById,
} = require("../Controller/recordController.js");

router.post("/create", createMedicalRecord);
router.get("/getall", getMedicalRecord);
router.put("/update/:id", updateMedicalRecord);
router.delete("/delete/:id", deleteMedicalRecord);
router.get("/get/:id", getMedicalRecordById);

module.exports = router;
