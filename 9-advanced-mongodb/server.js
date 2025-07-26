require("dotenv").config();
require("./database");

const express = require("express");
const productsRouter = require("./routes/products");
const app = express();

app.use(express.json());

app.use("/products", productsRouter);

app.listen(3000, () => {
  console.log("Server is listen to port 3000");
});
