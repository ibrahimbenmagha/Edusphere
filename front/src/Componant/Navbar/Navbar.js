import React from 'react';
import Monlogo from "./../../Photos/LogoPrincip/logo2.png";
import "./navbar.css";
import { CiSearch } from "react-icons/ci";
// import "./../bootstrap/css/bootstrap.min.css";



const Navbar = () => (

  <div className="navbar">

    <div className="logo">
      <img src={Monlogo} alt="ÉDUSPHERE" width={"290px"}/>
    </div>

    <div className="input-container">
      <input type="text" placeholder="Chercher par nom de l'ecole..." className='form-control' />
      <CiSearch className="search-icon" />
    </div>

  </div>

);

export default Navbar;