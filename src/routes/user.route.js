import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';

const router = express.Router();

//route to create a new user
router.post('/signup', newUserValidator, userController.createNewUser);

//route to signin user
router.post('/signin', userController.signin);

//route to forgot password
router.post('/forgot', userController.forgotPassword);

export default router;
