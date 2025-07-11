const express = require("express");
const app = express();

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

app.use((req, res, next) => {
  // Custom Middleware (App-Level Middleware)
});

app.get("/", (req, res, next) => {
  res.send("Welcome to home page");
});

app.get("/products", (req, res, next) => {
  res.json(products);
});

app.get("/products/:productId", (req, res, next) => {
  const { productId } = parseInt(req.params);
  const singleProduct = products.find((p) => p.id === productId);

  if (singleProduct) return res.json(singleProduct);
  else return res.status(404).json({ message: "Product is not found!" });
});
