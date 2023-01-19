import HttpStatus from 'http-status-codes';
import * as cartService from '../services/cart.service';

/**
 * Controller to add book into cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addToCart = async (req, res, next) => {
  try {
    const data = await cartService.addBookToCart(req.params._id,req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book add into cart successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to remove book from cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const removeBook = async (req, res, next) => {
  try {
    const data = await cartService.removeBookFromCart(req.params._id,req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book removed from cart successfully'
    });
  } catch (error) {
    next(error);
  }
};


/**
 * Controller to remove book from cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const purchaseBook = async (req, res, next) => {
  try {
    const data = await cartService.purchasedBook(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book Purchased from cart successfully'
    });
  } catch (error) {
    next(error);
  }
};


export const getCart = async (req, res, next) => {
  try {
    const data = await cartService.getCartBooks(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book fetch from cart successfully'
    });
  } catch (error) {
    next(error);
  }
};