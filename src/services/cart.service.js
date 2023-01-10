import Books from '../models/book.model';
import Cart from '../models/cart.model';

//get all notes
export const addBookToCart = async (_id, body) => {
  const data = await Books.findOne({_id: _id });
  if(data !== null){
      const book=[]
      const cartData = await Cart.findOne({userId: body.userId }); 
      if(cartData == null){
        data.quantity=1
        book.push(data)
        body.books=book
        //console.log(book)
        const Createdata = await Cart.create({
          userId: body.userId,
          cart_total:data.price,
          books:body.books
          
        });
        return Createdata;
      }else{
          const bookExist = await cartData.books.find((value) =>value._id == _id); 
          console.log(bookExist)
          if(bookExist == null){
            data.quantity =1
            cartData.books.push(data)
            cartData.cart_total +=data.price
            cartData.save();
            return cartData
            
          }else{
            console.log(bookExist.quantity)
            bookExist.quantity += 1;
            cartData.cart_total +=bookExist.price
            cartData.save();
            return cartData
          }
      }
  }else{
    throw new Error("Book dosen't exist");
  }
};