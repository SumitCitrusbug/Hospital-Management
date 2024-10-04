const { DataTypes } = require("sequelize");
const sequelize = require("../connection");
const Patient = require("./patientModel");
const Doctor = require("./doctorModel");

const MedicalRecord = sequelize.define("MedicalRecord", {
  recordDate: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  description: {
    type: DataTypes.TEXT,
  },
  patientId: {
    type: DataTypes.INTEGER,
    references: {
      model: Patient,
      key: "id",
    },
  },
  doctorId: {
    type: DataTypes.INTEGER,
    references: {
      model: Doctor,
      key: "id",
    },
  },
});

MedicalRecord.belongsTo(Patient, { foreignKey: "patientId" });
MedicalRecord.belongsTo(Doctor, { foreignKey: "doctorId" });

module.exports = MedicalRecord;
