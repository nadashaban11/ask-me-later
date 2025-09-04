import app from './app.js';
import {connectDb} from './config/db.js';


const port = process.env.PORT || 8000;

connectDb.then(()=>{
    app.listen(port, ()=>{
        console.log('server running on port ',port);
    });
});