import usersModel from "../models/usersModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
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

// Login Post
export const LoginController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // validation
    if ((!email && !username) || !password) {
      return res.status(404).send({
        success: false,
        message: "invalid Email or Username or password",
        error,
      });
    }
    const user = await usersModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered..!",
        error,
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    // token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login successfully",
      user: {
        name: user.name,
        email: user.email,
        username: user.username,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in login",
      error,
    });
  }
};

// test controller
export const testController = (req, res) => {
  res.send("protected routes");
};
