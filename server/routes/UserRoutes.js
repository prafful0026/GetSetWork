import express from "express";
import {signup,login} from "../controllers/UserControllers.js";
import {protect} from "../middlewares/authMiddleware.js";

const router = express.Router();

// router.route("/login").post(userLogin)
router.route("/signup").post(signup)
router.route("/login").post(login)



export default router;
        