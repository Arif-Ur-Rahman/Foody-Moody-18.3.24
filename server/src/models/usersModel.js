import { Schema, model } from "mongoose";
import { defProfile } from "../secret.js";

// Email validation function
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const usersSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      unique: true,
      minlength: [3, "Minimum length is 3 characters"],
      maxlength: [31, "Maximum length is 31 characters"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Minimum length is 3 characters"],
      maxlength: [31, "Maximum length is 31 characters"],
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      unique: true,
      minlength: [3, "Minimum length is 3 characters"],
      maxlength: [31, "Maximum length is 31 characters"],
      lowercase: true,
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Minimum length is 6 characters"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    image: {
      type: String,
      default: defProfile, // Use default profile image from configuration
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    isSupperAdmin: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    subscription: {
      type: String,
      enum: ["free", "basic", "premium"],
      default: "free",
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

export default model("users", usersSchema);
