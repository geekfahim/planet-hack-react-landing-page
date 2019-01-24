import React from "react";
import Logo from '../Assets/images/logo.png'
import {Link}  from 'react-router-dom';
const PrimaryMenu = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">
    <img src={Logo} className='logo' alt=""/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/services">Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/products">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/software">Software</Link>
      </li> 
      <li className="nav-item">
        <Link className="nav-link " to="/contact">Contact</Link>
      </li>           
    </ul>
  </div>
</nav>
    </div>
  );
};

export default PrimaryMenu;
