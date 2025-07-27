const { default: mongoose, model } = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  inStock: {
    type: Boolean,
    required: true,
  },

  tags: {
    type: [String],
    required: true,
  },
});

const Product = model("Product", ProductSchema);

module.exports = Product;
