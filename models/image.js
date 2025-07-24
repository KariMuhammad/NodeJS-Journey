const { Schema, model } = require("mongoose");

const ImageSchema = new Schema(
  {
    publicUrl: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const imageModel = model("Image", ImageSchema);

module.exports = imageModel;
