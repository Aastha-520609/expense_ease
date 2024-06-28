import React from 'react'
import './Navbar.css'
import logo from '../Assests/Logo.png'
import cart from '../Assests/cart.png'
import hamburgerIcon from '../Assests/hamburger.png';
import crossIcon from '../Assests/cross.png';
import { useState , useContext} from 'react';
import {ShopContext} from '../../Context/Context'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const[menu, setMenu] = useState("shop");
  const[isMenuOpen, setIsMenuOpen] = useState(false);
  
  const{getTotalCartItems} = useContext(ShopContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <button className="nav-toggle" onClick={toggleMenu}>
        <img src={isMenuOpen ? crossIcon : hamburgerIcon} alt="menu" />
      </button>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => { setMenu("shop"); toggleMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to="/"> Shop </Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("womens"); toggleMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to="/womens">Women</Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("mens"); toggleMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to="/mens">Men</Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("kids"); toggleMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ? (
          <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
        ) : (
          <Link to="/login"><button>Login</button></Link>
        )}
        <Link to="/cart"><img src={cart} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;