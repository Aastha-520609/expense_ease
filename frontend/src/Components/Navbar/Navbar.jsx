import React from 'react'
import './Navbar.css'
import logo from '../Assests/logo.jpg'
import cart from '../Assests/cart.png'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

  const[menu, setMenu] = useState("shop");
  return (
    <div className = 'navbar'>
      {/* Logo div */}
      <div className = "nav-logo">
        <img src={logo} alt="logo" />
      </div>
     {/*  NavList */}
      <ul className = "nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style = {{ textDecoration: 'none'}} to = "/"> Shop </Link>{menu==="shop"?<hr/>:<></>}</li> {/* if menu is shop then apply horizontal rule if not its an empty fragment */}
        <li onClick={()=>{setMenu("womens")}}><Link style = {{ textDecoration: 'none'}} to = "/womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style = {{ textDecoration: 'none'}} to = "/mens">Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style = {{ textDecoration: 'none'}}to = "/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
     {/*  cart */}
      <div className = "nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart} alt="cart" /></Link>
        {/* counting on cart */}
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar;
