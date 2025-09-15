import express from 'express';

import {signIn, signUp} from '../controllers/user.controller.js';
import { validateSignIn, validateSignUp } from '../middlewares/user.validation.js';
import { protect } from '../middlewares/auth.validation.js';

const userRouter = express.Router();


userRouter.post('/signUp', validateSignUp(), signUp);
userRouter.post('/signIn', validateSignIn(), signIn);

export default userRouter;