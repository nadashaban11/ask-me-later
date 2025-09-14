import express from 'express';

import {signUp} from '../controllers/user.controller.js';
import { validateSignUp } from '../middlewares/user.validation.js';

const userRouter = express.Router();


userRouter.post('/signUp', validateSignUp(), signUp);