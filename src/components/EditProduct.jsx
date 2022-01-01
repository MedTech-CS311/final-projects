import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import react, { useState, useEffect } from 'react';
import { editProduct, getProducts } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const initialValue ={
    name: '' ,
    category: '',
    brand: '',
    price: '' , 
    quantity: ''
    
 }

const EditProduct= () => {
    const [product, setProduct] = useState(initialValue);
    const { name, category, brand, price, quantity } = product;
    const { id } = useParams();
    const classes = useStyle();
    const navigate = useNavigate();
    

   useEffect(() => {
        loadProductData();
    }, []);

    const loadProductData = async() => {
        const response = await getProducts(id);
        setProduct(response.data);
    }


    const onValueChange = (e) => {
        console.log(e.target.value);
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const editProductDetails = async() => {
        await editProduct(id, product);
        navigate('/all');
        
    }


    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Category</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='category' value={category} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Brand</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='brand' value={brand} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Price</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='price' value={price} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Quantity</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='quantity' value={quantity} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editProductDetails()}>Save</Button>
                <Button variant="contained" color="secondary" style={{marginTop:11}} component={Link} to={`/all`}>Cancel</Button>
            </FormControl>
        </FormGroup>
        

    )
}

export default EditProduct;