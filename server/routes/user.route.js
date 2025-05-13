import express from "express";
import {
  // getUserProfile,
  login,
  // logout,
  register,
  // updateProfile,
} from "../controllers/user.controller.js";
// import { login } from '../controllers/user.controller.js'; // adjust the path if needed


const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);

// router.route("/logout").get(logout);

// Temporarily skip isAuthenticated middleware
// router.route("/profile").get(getUserProfile);
// router.route("/profile/update").put(updateProfile);

export default router;
