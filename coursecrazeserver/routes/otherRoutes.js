import express from "express";
import { isAuthenticated, isAuthorizeAdmin } from "../middlewares/auth.js";
import { contact, courseRequest, getDashboardStats } from "../controllers/otherController.js";

const router = express.Router();

//contact form
router.route("/contact").post(contact);

router.route("/courserequest").post(courseRequest);

router.route("/admin/stats").get(isAuthenticated,isAuthorizeAdmin,getDashboardStats);



export default router;