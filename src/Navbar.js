import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub,FaCode,FaHome } from "react-icons/fa";
import './index.css';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" >Cocktail|Mixer</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" >Home <FaHome/></Link>
          </li>
          <li className="nav-item">
            <a href="https://github.com/arbaztalk2me" target='_blank' className="nav-link" >Github <FaGithub/></a>
          </li>
          <li className="nav-item">
            <a href="https://arbaztalk2me.github.io/ArbazUrRahman/" target='_blank' className="nav-link" >Developer <FaCode/></a>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link ">About</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
