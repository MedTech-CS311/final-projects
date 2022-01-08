

import NavBar from './components/NavBar';
import ProductManagementSystem from './components/ProductManagementSystem';
import AllProducts from './components/AllProducts';
import AddProduct from './components/AddProduct';
import NotFound from './components/NotFound';
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route exact path="/" element={<ProductManagementSystem/>} />
        <Route exact path="all" element={<AllProducts/>} />
        <Route exact path="add" element={<AddProduct/>} />
        <Route exact path="edit" element={<EditProduct/>} >
          <Route exact path=":id" element={<EditProduct/>}/>
        </Route>
        <Route exact path="delete" element={<DeleteProduct/>} >
         <Route exact path=":id" element={<DeleteProduct/>}/>
        </Route>
        <Route element = {<NotFound/>} />
        
       
   
        </Routes>
    </BrowserRouter>
  );
}

export default App;
