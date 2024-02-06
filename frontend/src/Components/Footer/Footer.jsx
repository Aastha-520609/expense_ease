import React from 'react';
import './Footer.css';
import facebook from '../Assests/facebook.png';
import instagram from '../Assests/instagram.png';
import twitter from '../Assests/twitter.png';
import printest from '../Assests/printest.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>About us</li>
              <li>Our services</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Order Status</li>
              <li>Payment Options</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <img src={facebook} alt="Facebook" />
              <img src={twitter} alt="Twitter" />
              <img src={instagram} alt="Instagram" />
              <img src={printest} alt="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
