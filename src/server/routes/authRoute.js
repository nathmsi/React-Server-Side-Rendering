import express from 'express';


const userRouter = express.Router();

import * as authController from '../controllers/authController';



// POST
userRouter.post('/signin', authController.signin );
userRouter.post('/signup', authController.signup);


export default userRouter;