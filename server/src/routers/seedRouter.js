import express from "express";
import { seedUsers } from "../controllers/seedControllers";
const seedRouter = express.Router();

seedRouter.get("users/", seedUsers);

module.exports = { seedRouter };
