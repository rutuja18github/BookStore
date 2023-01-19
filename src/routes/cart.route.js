import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new cart and add book into it
router.post('/:_id',userAuth, cartController.addToCart);

//route to remove book from cart 
router.post('/remove/:_id',userAuth, cartController.removeBook);

//route to Purchased book  
router.put('/purchase',userAuth, cartController.purchaseBook);
//get cart
router.get('/get',userAuth, cartController.getCart);

export default router;