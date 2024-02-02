import express from "express";
import { addtoPlaylist, changePassword, deleteMyProfile, deleteuser, forgetPassword, getAllusers, getMyProfile, login, logout, register, removefromPlaylist, resetPassword, updateProfile, updateProfilepicture, updateuserRole } from "../controllers/userController.js";
import { isAuthenticated, isAuthorizeAdmin } from "../middlewares/auth.js";
import singleupload from "../middlewares/multer.js";


const router = express.Router();

router.route("/register").post(singleupload,register);

//login
router.route("/login").post(login);

router.route("/logout").post(logout);

//get my profile
router.route("/me").get(isAuthenticated,getMyProfile);

router.route("/me").delete(isAuthenticated, deleteMyProfile);

router.route("/changepassword").put(isAuthenticated,changePassword);

router.route("/updateprofile").put(isAuthenticated,updateProfile);

router.route("/updateprofilepicture").put(isAuthenticated,singleupload,updateProfilepicture);

router.route("/forgetpassword").post(forgetPassword);

router.route("/resetpassword/:token").put(resetPassword);

router.route("/addtoplaylist").post(isAuthenticated,addtoPlaylist);

router.route("/removefromplaylist").delete(isAuthenticated,removefromPlaylist);

//Admin Routes
router.route("/admin/users").get(isAuthenticated,isAuthorizeAdmin,getAllusers)

router.route("/admin/user/:id").put(isAuthenticated,isAuthorizeAdmin,updateuserRole).delete(isAuthenticated,isAuthorizeAdmin,deleteuser)



export default router;
