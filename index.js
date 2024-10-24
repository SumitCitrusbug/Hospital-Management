require("dotenv").config();
let ejs = require("ejs");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const setupSwagger = require("./swagger/swagger");
// const swaggerUi = require("swagger-ui-express");
// const YAML = require("yamljs");
// const swaggerDocument = YAML.load("./docs/swagger.yaml");

//route import
const authRouter = require("./Routes/authRoute");
const patientRoute = require("./Routes/patientRoute");
const doctorRoute = require("./Routes/doctorRoute");
const recordRoute = require("./Routes/recordRoute");

const {
  verifyToken,
  isPatient,
  isStaff,
} = require("./middelware/authMiddelware.js");


// Swagger setup
setupSwagger(app);
//middleware
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/auth", authRouter);
app.use("/patient", [verifyToken, isStaff], patientRoute);
app.use("/doctor", [verifyToken, isStaff], doctorRoute);
app.use("/record", [verifyToken, isStaff || isPatient], recordRoute);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
