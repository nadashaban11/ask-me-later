
import express from 'express';
import dotenv from 'dotenv';

import ideaRouter from './routes/idea.router.js';

dotenv.config();
const app = express();


app.use(express.json());



app.use('/api/ideas', ideaRouter);


export default app;