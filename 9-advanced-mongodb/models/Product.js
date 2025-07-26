const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: String,
  category: String,
  price: Number,
  inStock: Boolean,
  tags: [String],
});

const Product = model("Product", ProductSchema);

module.exports = Product;
