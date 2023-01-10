import Books from '../models/book.model';

//get all notes
export const getAllBooks = async () => {
  const data = await Books.find();
  return data;
};


