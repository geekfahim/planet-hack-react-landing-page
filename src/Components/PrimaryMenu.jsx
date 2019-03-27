import React from "react";
import Logo from '../Assets/images/logo.png';
import {NavLink}  from 'react-router-dom';
const PrimaryMenu = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg  navbar-light bg-light">
  <NavLink className="navbar-brand" exact to="/">
    <img src={Logo} className='logo' alt=""/>
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav primarymenu m-auto">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/services">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " exact to="/products">Products</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " exact to="/software">Software</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
      </li>           
    </ul>
  </div>
</nav>
    </div>
  );
};

export default PrimaryMenu;
