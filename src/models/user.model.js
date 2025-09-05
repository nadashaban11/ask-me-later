import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "name is required"]
    },
    email : {
        type : String,
        required : [true, 'email is required'],
        unique : true
    },
    password : {
        type : String,
        required : [true, 'password is required'],
        minlength : [8 , 'password can not be less than 8 characters']
    },
},
    {
        timestamps: true
    }

);


const User = mongoose.model('User' , userSchema);

export default User;