const { DataTypes } = require("sequelize");
const sequelize = require("../connection");
const User = require("./userModel");

const Doctor = sequelize.define("Doctor", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialization: {
    type: DataTypes.STRING,
  },
  contactNumber: {
    type: DataTypes.STRING,
    unique: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
});

Doctor.sync();
Doctor.belongsTo(User, { foreignKey: "userId" }, { onDelete: "CASCADE" });

module.exports = Doctor;
