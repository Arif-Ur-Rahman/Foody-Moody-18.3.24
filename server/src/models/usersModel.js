const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
    minlength: [3, "minimum length 3 character"],
    maxlength: [31, "maximum length 31 character"],
  },
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
    minlength: [3, "minimum length 3 character"],
    maxlength: [31, "maximum length 31 character"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
    unique: true,
    minlength: [3, "minimum length 3 character"],
    maxlength: [31, "maximum length 31 character"],
    lowercase: true,
  },
});
