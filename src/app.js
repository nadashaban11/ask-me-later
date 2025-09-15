
import express from 'express';
import dotenv from 'dotenv';

import ideaRouter from './routes/idea.router.js';
import userRouter from './routes/user.router.js';

dotenv.config();
const app = express();


app.use(express.json());



app.use('/api/ideas', ideaRouter);
app.use('/api/auth', userRouter);


export default app;