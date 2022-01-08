import { TableBody, TableCell, TableHead, Table, TableRow, makeStyles, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getProducts  } from "../service/api";
import { Link } from 'react-router-dom';

const useStyle = makeStyles ({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
       '& > *': {
           background: '#000000',
           color: '#FFFFFF',
           fontSize: 20
       } 
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

const AllProducts = () => {

       const [products, setProduct] = useState([]);
       const classes = useStyle();

       useEffect(() => {
         getAllProducts();
       }, [])

      

       const getAllProducts = async () => {
          const response = await getProducts(); 
          console.log(response.data);
          setProduct(response.data);
       }

       //const deleteProductData = async (id) => {
       // await deleteProduct(id);
       // getAllProducts();
   // }


    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {
                  products.map(product => (
                      <TableRow className={classes.row} key={product._id}>
                          <TableCell>{product._id}</TableCell>
                          <TableCell>{product.name}</TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>{product.brand}</TableCell>
                          <TableCell>{product.price}</TableCell>
                          <TableCell>{product.quantity}</TableCell>
                          <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${product._id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" component={Link} to={`/delete/${product._id}`}>Delete</Button> 
                          </TableCell>
                      </TableRow>
                  ))
              }
            </TableBody>
        </Table>
    );
}

export default AllProducts;