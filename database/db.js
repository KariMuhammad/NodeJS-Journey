const { default: mongoose } = require("mongoose");
const config = require("../config");

mongoose
  .connect(config.database_connection_url)
  .then(() => {
    console.log("Database Connected correctly");
  })
  .catch((error) => {
    console.error("Failed Connecting to Database!");
  });
