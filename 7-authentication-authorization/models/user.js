const { Schema, Model } = require("mongoose");

const userSchema = new Schema({});

const userModel = Model("User", userSchema);
