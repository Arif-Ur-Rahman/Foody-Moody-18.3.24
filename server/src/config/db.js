import { MongoDBurl } from "../secret.js";
import mongoose from "mongoose";

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MongoDBurl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
