import express from "express";
import {
  LoginController,
  forgotPasswordController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", registerController);

router.post("/login", LoginController);
// forgot password
router.post("/forgot-password", forgotPasswordController);
// test routes
router.get("/test", requireSignIn, isAdmin, testController);
export default router;
