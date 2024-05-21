import express from "express";
import { seedUsers } from "../controllers/seedControllers.js"; // Ensure correct relative path and .js extension

const seedRouter = express.Router();

seedRouter.get("/users", seedUsers); // Corrected the route path

export default seedRouter; // Use ES module export syntax
