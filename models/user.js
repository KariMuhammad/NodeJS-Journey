const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "username of user is required"],
  },

  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
  },

  passwordResetToken: String,
  passwordResetExpires: Number,

  role: {
    type: String,
    enum: ["user", "admin"], // there is "super-admin" but it is only for one user
    default: "user",
  },
});

const userModel = model("User", userSchema);

module.exports = userModel;
