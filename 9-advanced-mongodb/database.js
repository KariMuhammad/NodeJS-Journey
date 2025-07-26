const { default: mongoose } = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("[Database Connection] Success");
  })
  .catch((error) => {
    console.log("[Database Connection] Failed");
  });
