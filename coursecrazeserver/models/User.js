import mongoose from "mongoose";
import validator from "validator";

const schema=new mongoose.Schema({


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

password:{
    type:String,
    required:[true,"Please Enter your Password"],
    minLength:[6,"Password must be at least 6 characters"],
    validate:validator.isEmail,
    select:false,

},

role:{
    type:String,
   enum:["admin","user"],
    minLength:[6,"Password must be at least 6 characters"],
    
    dafault:"user",

},

Subscription:{
id:String ,
status:String,    
},



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


playlist:[{
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    },
    poster:string,
}],


createdAt:{
    type:Date,
    default:Date.now,
},


ResetPasswordToken:String,
ResetPasswordExpire:String,

});

export const User=mongoose.model("User",schema);
