import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link className='homePage' to='/'>
          ART GALLERY
        </Link>
        
        <button>
        <Link className='nav-link' to='/add'>
          Add Painting
        </Link>
        </button>
    </nav>
  )
}

export default Navbar
