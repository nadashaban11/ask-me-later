import mongoose from "mongoose";
import { type } from "os";


const noteSchema = new mongoose.Schema({
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
        enum : ['low' , 'mid' , 'high'],
        default : 'mid'
    },
},
{
    timestamps : true
}

);



const Note = mongoose.model('Note', noteSchema);

export {Note};

