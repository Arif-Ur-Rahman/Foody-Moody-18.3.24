import express from "express";
import { registerController } from "../controllers/authController.js";
const router = express.Router();

router.post("/register", registerController);
router.get("/register", () => {
  return res.status(200).send({
    message: "register page",
  });
});

export default router;