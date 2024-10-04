require("dotenv").config();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

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

//middleware
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use("/auth", authRouter);
app.use("/patient", [verifyToken, isStaff], patientRoute);
app.use("/doctor", [verifyToken, isStaff], doctorRoute);
app.use("/record", [verifyToken, isPatient], recordRoute);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
