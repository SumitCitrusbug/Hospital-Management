require("dotenv").config();

const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
