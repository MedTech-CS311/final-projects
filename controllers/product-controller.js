import { request, response } from 'express';
import Product from '../model/product-schema.js';

export const getProducts = async (request, response) => {
    try{
        let product = await Product.find();
        response.json(product);
     }catch(error){
         response.json({message: error.message});
     }
    
}

export const addProduct = async  (request, response) => {
    const product = request.body;
    const newProduct = new Product(product);

   try{
      await newProduct.save();
      response.json(newProduct);
   }catch(error){
       response.json({message: error.message});
   }
}
  
export const getProductById = async(request, response) =>{
    const id = request.params.id;
    try{
    const product = await Product.findById(id);
    response.json(product);
    }catch(error){
        response.json({message: error.message});
    }
}

export const editProduct = async (request,response) => {
    const product = request.body;

    const editProduct = new Product(product);

    try{
         await Product.updateOne({ _id: request.params.id}, editProduct);
         response.json(editProduct);
    }catch(error) {
         response.json({message: error.message});
    }
}

export const deleteProduct = async (request, response) => {
    try{
        await Product.deleteOne({ _id: request.params.id});
        response.json("Product Deleted Successfully");
    }catch(error) {
        response.json({message: error.message});

    }
}