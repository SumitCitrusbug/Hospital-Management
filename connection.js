const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("hospital_db", "postgres", "Citrusbug@123", {
  host: "localhost",
  dialect: "postgres",
});

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Use 'alter' to update the schema without dropping tables
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
};

syncDatabase();
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
