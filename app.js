// Load Variable in `.env` into `process.env`
require("dotenv").config();

// Setup Server
const express = require("express");
const app = express();
const config = require("./config");

// Setup Database
require("./database/db");

// Setup Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup Routes

const port = config.port || 3000;
app.listen(port, () => {
  console.log(`Server is now running on port ${port}`);
});
