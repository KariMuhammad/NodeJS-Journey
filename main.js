require("dotenv").config();
const config = require("./config");
const express = require("express");
const app = express();

// Import Routes
const authRouter = require("./routes/auth");
const homeRouter = require("./routes/home");
const adminRouter = require("./routes/admin");
const imagesRouter = require("./routes/images");

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Setup Database
require("./database/db");

// Routes
app.use("/api/auth", authRouter);
app.use("/api/home", homeRouter);
app.use("/api/admin", /* 3#  auth */ adminRouter);
app.use("/api/images", imagesRouter);

// Start Server
app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});
