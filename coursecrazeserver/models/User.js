import mongoose from "mongoose";
import validator from "validator";

const schema=new mongoose.Schema({

//Name type, required
name:{
    type:String,
    required:[true,"Please Enter your Name"],
},
email:{
    type:String,
    required:[true,"Please Enter your Email"],
    unique:true,
    validate:validator.isEmail,

},


//Email type, required, unique, validate


//Password type, required, minLength, select
password:{
    type:String,
    required:[true,"Please Enter your Password"],
    minLength:[6,"Password must be at least 6 characters"],
    validate:validator.isEmail,
    select:false,

},
//Role type, enum, default
role:{
    type:String,
   enum:["admin","user"],
    minLength:[6,"Password must be at least 6 characters"],
    
    dafault:"user",

},

//Subscription id, status
Subscription:{
id:String ,
status:String,    
},

//Avatar public_id, url

avatar:{
    public_id:{
    status:String,   
    required:true, 
    },
    url:{
        type:String,
        required:true,
    },
},
//Playlist [ courseId,poster ]

playlist:[{
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    },
    poster:string,
}],


//CreatedAt type, default
createdAt:{
    type:Date,
    default:Date.now,
},
//ResetPasswordToken type
//ResetPasswordExpire type

ResetPasswordToken:String,
ResetPasswordExpire:String,

});

export const User=mongoose.model("User",schema);
