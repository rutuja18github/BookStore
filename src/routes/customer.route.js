import express from 'express'
import {userAuth} from '../middlewares/auth.middleware'
import * as customerController from '../controllers/customer.controller'

const router = express.Router();

//router to add customer details
router.post('',userAuth,customerController.addCustomerDetails);

export default router;