import { AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }
})
const NavBar = () => {
    const classes = useStyle();
    return (
       <AppBar className={classes.header} position="static" >
           <Toolbar>
               <NavLink className = {classes.tabs} to="./" exact>Product Management System</NavLink>
               <NavLink className = {classes.tabs} to="all" exact>All Products</NavLink>
               <NavLink className = {classes.tabs} to="add" exact>Add Product</NavLink>



           </Toolbar>
       </AppBar>
    )
}


export default NavBar;