import mongoose from "mongoose";
import bcrypt from 'bcrypt';

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

userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password,10);
    next();
})


const User = mongoose.model('User' , userSchema);

export default User;