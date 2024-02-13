import express from "express";
import { addLecture, createCourse, deleteCourse, deleteLecture, getAllCourses, getCourseLectures } from "../controllers/courseController.js";
import singleupload from "../middlewares/multer.js";
import { isAuthenticated, isAuthorizeAdmin, isAuthorizeSubscribes } from "../middlewares/auth.js";

const router = express.Router();

//get all courses without lectures
router.route("/courses").get(getAllCourses);


//create new courses -only admin
router.route("/createcourse").post(isAuthenticated, isAuthorizeAdmin, singleupload, createCourse);

//Add lectures,delete Course, Get course Details

router.route("/course/:id").get(isAuthenticated,getCourseLectures).post(isAuthenticated, isAuthorizeAdmin, singleupload, addLecture).delete(isAuthenticated, isAuthorizeAdmin, deleteCourse);

router.route("/lectures").delete(isAuthenticated, isAuthorizeAdmin, deleteLecture);

//delete Lectures

export default router;
