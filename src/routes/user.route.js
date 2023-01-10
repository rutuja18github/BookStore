import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import  {resetAuth}  from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new user
router.post('/signup', newUserValidator, userController.createNewUser);

//route to signin user
router.post('/signin', userController.signin);

//route to forgot password
router.post('/forgot', userController.forgotPassword);

//route for reset password
router.put('/reset',resetAuth, userController.ResetPassword);

export default router;
