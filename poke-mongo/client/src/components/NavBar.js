import React, { Component } from 'react';
import { Link } from "react-router-dom";
class NavBar extends React.Component {
    render() { 
        return (
      <div>   
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar {" "}
                 <span className="badge badge-pill badge-secondary">
                     {this.props.totalCounters}
                 </span>
            </a>
        </nav>
    </div>
      
        )
    }
}
 
export default NavBar ;