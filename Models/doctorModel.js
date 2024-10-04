// models/patient.js

const { DataTypes } = require("sequelize");
const sequelize = require("../connection");
const User = require("./userModel");

const Doctor = sequelize.define("Patient", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialization: {
    type: DataTypes.STRING,
  },
  contactNumber: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
});

Patient.belongsTo(User, { foreignKey: "userId" });

module.exports = Doctor;
