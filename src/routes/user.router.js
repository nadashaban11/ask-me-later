import express from 'express';

import {signIn, signUp} from '../controllers/user.controller.js';
import { validateSignIn, validateSignUp } from '../middlewares/user.validation.js';

const userRouter = express.Router();


userRouter.post('/signUp', validateSignUp(), signUp);
userRouter.post('/signIn', validateSignIn(), signIn);