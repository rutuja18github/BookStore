import express from 'express';
import * as wishlistController from '../controllers/wishlist.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new wishlist and add book into it
router.post('/:_id',userAuth, wishlistController.addToWishlist);

export default router;