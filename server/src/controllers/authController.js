import usersModel from "../models/usersModel.js";
import { hashPassword } from "../helpers/authHelper.js";

export const registerController = async (req, res) => {
  try {
    const { username, name, email, password, gender, image, address, phone } =
      req.body;

    if (!username) {
      return res.status(400).send("Username is required");
    }
    if (!name) {
      return res.status(400).send("Name is required");
    }
    if (!email) {
      return res.status(400).send("Email is required");
    }
    if (!password) {
      return res.status(400).send("Password is required");
    }

    // Check if user already exists
    const existingUser = await usersModel.findOne({ email, username });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exists, please login",
      });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create and save the new user
    const user = await new usersModel({
      username,
      name,
      email,
      password: hashedPassword,
      gender,
      image,
      address,
      phone,
    }).save();

    res.status(201).send({
      success: true,
      message: "Registration successful",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};
