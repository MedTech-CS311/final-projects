import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import react, { useState } from 'react';
import { addProduct } from '../service/api';
import { useNavigate} from 'react-router-dom';

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

const AddProduct= () => {
    const [product, setProduct] = useState(initialValue);
    const { name, category, brand, price, quantity } = product;
    const classes = useStyle();
    const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const addProductDetails = async() => {
        await addProduct(product);
        navigate('/all');
        
    }


    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Product</Typography>
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
                <Button variant="contained" color="primary" onClick={() => addProductDetails()}>Add Product</Button>
            </FormControl>
        </FormGroup>
        

    )
}

export default AddProduct;