// models/patient.js

const { DataTypes } = require("sequelize");
const sequelize = require("../connection");
const User = require("./userModel.js");

const Patient = sequelize.define("Patient", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
});

Patient.sync();
Patient.belongsTo(User, { foreignKey: "userId" });

module.exports = Patient;
