import express from "express";
const router = express.Router();
import { signup, login, logout } from "../controllers/auth.controller.js";

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

router.get("/forgot-password", (req, res) => {
    res.send("Forgot Password Page");
})
router.get("/verify", (req, res) => {
    res.send("Verify Page");
})
// router.get("/logout", (req, res) => {
//     res.send("Logout Page");
// })  
export default router;