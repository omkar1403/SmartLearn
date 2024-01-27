import express from "express";
import { createCourse, getAllCourses } from "../controllers/courseController.js";

const router = express.Router();

//get all courses without lectures
router.route("/courses").get(getAllCourses);


//create new courses -only admin
router.route("/createcourse").post(createCourse);

//Add lectures,delete Course, Get course Details
//delete Lectures

export default router;
