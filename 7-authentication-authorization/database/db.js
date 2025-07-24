const mongoose = require("mongoose");
const config = require("../config");

mongoose
  .connect(config.atlas_db.url)
  .then(() => {
    console.log("Database Sucessfully Connected");
  })
  .catch((error) => {
    console.log("Failed to connect to database");
    console.log("Error -> ", error.message);
    process.exit(1);
  });
