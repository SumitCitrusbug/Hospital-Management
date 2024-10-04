const express = require("express");
const router = express.Router();

const {
  createDoctor,
  getDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../Controller/doctorController.js");

router.post("/create", createDoctor);
router.get("/getall", getDoctor);
router.put("/update/:id", updateDoctor);
router.delete("/delete/:id", deleteDoctor);

module.exports = router;
