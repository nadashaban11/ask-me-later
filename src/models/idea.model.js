import mongoose from "mongoose";
import { type } from "os";


const ideaSchema = new mongoose.Schema({
    content : {
        type:String,
        required:true
    },
    reminderMeAt : {
        type : Date,
        required : false
    },
    status : {
        type : String,
        enum : ['pinding' , 'done'],
        default : 'pinding'
    },
    priority : {
        type : String,
        enum : ['low' , 'medium' , 'high'],
        default : 'mid'
    },
},
{
    timestamps : true
}

);



const Idea = mongoose.model('Idea', ideaSchema);

export {Idea};

