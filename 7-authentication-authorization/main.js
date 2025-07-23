require("dotenv").config();
const config = require("./config");
const express = require("express");
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
// app.use("/<route-name>", )

// Start Server
app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});
