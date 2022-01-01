import express from 'express';
import {getProducts, addProduct, getProductById, editProduct, deleteProduct} from '../controllers/product-controller.js';


const router = express.Router();

router.get('/', getProducts );
router.post('/add', addProduct);
router.get('/:id',getProductById);
router.put('/:id', editProduct);
router.delete('/:id', deleteProduct);


export default router;                   