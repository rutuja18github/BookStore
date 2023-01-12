import Book from "../models/book.model"
import Wishlist from '../models/wishlist.model'

export const addBookToWishlist = async (_id, body) => {
    const bookDetails = await Book.findById({ _id: _id })
    //check if book exist
    if (bookDetails != null) {
        const bookArray = [];
        const wishlistData = await Wishlist.findOne({ userId: body.userId });
        console.log(wishlistData)
        //check if wishlist exist
        if (wishlistData == null) {
            bookArray.push(bookDetails)
            body.books = bookArray
            const createdData = await Wishlist.create({
                userId: body.userId,
                books: body.books
            })
            return createdData;
        }
        else {
            const bookCheck = await wishlistData.books.find((book) => book._id == _id)
            console.log("****"+bookCheck)
            if (bookCheck == null) {
                wishlistData.books.push(bookDetails)
                wishlistData.save();
                return wishlistData
            } 
            else {
                throw new Error("Book all ready exist in wishlist ");
            }
        }
    }
    else {
        throw new Error("Book dosen't exist");
    }
}

export const removeBookFromWishlist =async (_id , body) =>{
    const wishlist=await Wishlist.findOne({userId : body.userId });
       console.log(wishlist);
       if(wishlist != null){
            const bookCheck = await wishlist.books.find((book) => book._id == _id)
            if(bookCheck != null){
              await wishlist.books.splice(wishlist.books.findIndex((item) => item._id == _id),1)
              wishlist.save();
              return wishlist
            }
            else{
                throw new Error("Book not exist");
            }
       }
       else{
        throw new Error("Wishlist dosen't exist");
       }
}