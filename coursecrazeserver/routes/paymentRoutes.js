import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import  {buysubscription, cancelSubscription, getRezorpaykey, paymentVerification}  from "../controllers/paymentController.js";

const router = express.Router();

//Buy Subscription

router.route("/subscribe").get(isAuthenticated,buysubscription)

//Verify payment and save reference in database
router.route("/paymentverification").post(isAuthenticated,paymentVerification)

router.route("/razorpay").get(getRezorpaykey);

router.route("/subscribe/cancel").delete(isAuthenticated,cancelSubscription);

export default router;