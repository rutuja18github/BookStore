import HttpStatus from 'http-status-codes';
import * as wishlistService from '../services/wishlist.service';

//Controller to add book into wishlist
export const addToWishlist =async (req,res,next) =>{
    try{
        const data= await wishlistService.addBookToWishlist(req.params._id,req.body);
         res.status(HttpStatus.OK).json({
            code:HttpStatus.OK,
            data:data,
            message:'Book added to wishlist successfully'
         })
    }
    catch(error){
        next(error)
    }
}

//Controller to remove book into wishlist
export const removeBook = async (req,res,next) =>{
    try{
        const data= await wishlistService.removeBookFromWishlist(req.params._id,req.body);
        res.status(HttpStatus.OK).json({
        code:HttpStatus.OK,
        data:data,
        message:'Book removed to wishlist successfully'
        })
    }catch(error){
        next(error);
    }
}

