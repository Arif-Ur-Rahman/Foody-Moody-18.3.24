import mongoose from "mongoose";
import { MongoDBurl } from "../secret";

const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(MongoDBurl, options);
    console.log("Successfully Connected DataBase");
    mongoose.connection.on("err", (err) => {
      console.error(`DataBase connection: ${err}`);
    });
  } catch (err) {
    console.log(err.toString());
  }
};

module.exports = connectDB;
