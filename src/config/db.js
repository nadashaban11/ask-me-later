import mongoose from "mongoose";



export async function connectDb(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB connected');

    }catch(error){
        console.log('error connecting DB' , error);
        process.exit(1)
    }
}