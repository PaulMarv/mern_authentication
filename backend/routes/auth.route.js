import express from "express";
import { login, logout, signUp, verifyEmail } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signUp)
router.post("/verify-email", verifyEmail);
router.post("/login", login);
router.post("/logout", logout);

export default router;
