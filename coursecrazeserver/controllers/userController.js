import {catchAsyncError} from "../middlewares/catchAsyncError.js"
import ErrorHandler from "../utils/errorHandler.js";
import {User} from "../models/User.js"


export const register=catchAsyncError(async(req,res,next)=>{
 const {name,email,password}=req.body;
 const file = req.file;

 if(!name || !email || !password || !file)
  return next(new ErrorHandler("Please Enter all fields",400));

let user=await User.findOne({email});

if(user) return next(new ErrorHandler("User Already Exists",409));

//upload file on cloudinary

user = await User.create({
    name,
    email,
    password,
    avatar:{
        public_id:"tempid",
        url:"tempurl",
    },
});


});