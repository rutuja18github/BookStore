import express from 'express';
import * as bookController from '../controllers/book.controller';

const router = express.Router();

//route to get all notes
router.get('/allbook' ,bookController.getAllBooks);

export default router;