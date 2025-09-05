import app from './app.js';
import {connectDb} from './config/db.js';


const port = process.env.PORT || 8000;

try{
    await connectDb();
    app.listen(port,()=>{
        console.log("DB connected");
    });
}catch(err){
    console.log('failed to connect');
    process.exit(1)
}