const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const { defProfile } = require("../secret"); // Import default profile image path

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
      minlength: [6, "Minimum length is 6 characters"],
      set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: [true, "Gender is required"],
    },
    image: {
      type: String,
      default: defProfile, // Use default profile image from configuration
    },
    address: {
      type: String,
      required: [true, "User address is required"],
    },
    phone: {
      type: String,
      required: [true, "User phone number is required"],
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
      enum: ["normal", "basic", "premium"],
      default: "normal",
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Pre-save hook to hash the password
usersSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    } catch (err) {
      return next(err);
    }
  }
  next();
});

module.exports = model("User", usersSchema);
