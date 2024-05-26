import express from "express";
import {
  LoginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", registerController);

router.post("/login", LoginController);

// test routes
router.get("/test", requireSignIn, testController);
export default router;
