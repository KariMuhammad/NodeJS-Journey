const { Schema, model } = require("mongoose");

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: [100, "title should be less than 100 chars"],
    },

    author: {
      type: String,
      required: true,
      trim: true,
    },

    publicationYear: {
      type: Number,
      required: true,
      min: [1000, "at least 1000 year"],
      max: [new Date().getFullYear(), "Cannot be in the future"],
    },
  },
  { timestamps: true }
);

const BookModel = model("Book", BookSchema);

module.exports = { BookSchema, BookModel };
