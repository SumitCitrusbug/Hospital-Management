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

MedicalRecord.sync();

MedicalRecord.belongsTo(
  Patient,
  { foreignKey: "patientId" },
  { onDelete: "CASCADE" }
);
MedicalRecord.belongsTo(
  Doctor,
  { foreignKey: "doctorId" },
  { onDelete: "CASCADE" }
);

module.exports = MedicalRecord;
