import mongoose from "mongoose";

const schema=new mongoose.Schema({
   
    title:{
        type:String,
        required:[true,"Please Enter Course Title"],
        minLength:[6,"Title must be 6 characters"],
        maxLength:[18,"Title can't exceed 18 characters"]

    },


   // Title type, required, minLength, maxLength
    //Description type, required, minLength
    description:{
        type:String,
        required:[true,"Please Enter Course Title"],
        minLength:[20,"Title must be 20 characters"],


    },


    //Lectures title,description,videos { public_id,url }
lectures:[{

    title:{
    type:String,
    required:true,
    },
    description:{
        type:String,
        required:true,
        },

    video:{
        public_id:{
        status:String,   
        required:true, 
        },
        url:{
            type:String,
            required:true,
        },
    },
}],

    //Poster public_id, url
    poster:{
        public_id:{
        status:String,   
        required:true, 
        },
        url:{
            type:String,
            required:true,
        },
    },

    views:{
        type:Number,
        default:0,
    },
    numOfVideos:{
        type:Number,
        default:0,
    },

   
    //Category type, required
    category:{
        type:String,
        required:true,
    },
    //CreatedBy type, required
    
    createdBy:{
        type:String,
        required:[true,"Enter Creators name"],
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },

});
schema.enable('validate')

export const Course=mongoose.model("Course",schema);
