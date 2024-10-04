require("dotenv").config();

const express = require("express");
const app = express();
const authRouter = require("./Routes/authRoute.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use("/auth", authRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
