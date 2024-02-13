import app from "./app.js";
import { connectDB } from "./config/database.js"
import cloudinary from "cloudinary";
import Razorpay from "razorpay"
import NodeCron from "node-cron"
import { Stats } from "./models/Stats.js";

connectDB();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

export var instance = new Razorpay({
    key_id: "rzp_test_jshzjKqJTVS46z",
    key_secret: "Uq7A9pb89o4MXYB6uQykRjoz",
})



NodeCron.schedule("0 0 0 1 * *", async () => {
    try {
        await Stats.create({});
    } catch (error) {
        console.log(error);
    }

})



app.listen(process.env.PORT, () => {
    console.log(`Server is working on port:${process.env.PORT}`);
});
