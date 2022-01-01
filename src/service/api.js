import axios from 'axios';


const url ='http://localhost:8000/products';

export const getProducts = async(id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addProduct = async(product) => {
    return await axios.post(`${url}/add`,product);
}


export const editProduct = async (id, product) => {
    return await axios.put(`${url}/${id}`, product)
}


export const deleteProduct = async (id, product) => {
   return await axios.delete(`${url}/${id}`, product);
}