import express from 'express';
//import mongoose from 'mongoose';

//import Product from '../model/product.model.js';
import { createProduct,updateProduct,getProducts,deleteProduct } from '../controllers/product.controller.js';

const router=express.Router();
//export default router;
router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id",updateProduct);
//console.log(process.env.MONGO_URI);
router.delete("/:id", deleteProduct);

export default router;