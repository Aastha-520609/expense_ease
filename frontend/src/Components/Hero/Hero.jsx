import React from 'react'
import './Hero.css'
import main_img from '../Assests/header.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={main_img} alt="" />
      <div className="overlay-text">
        <div className="text-content">
            <h1>StyleSphere</h1>
            <h3>Your Stylish Beginning Awaits</h3>
            <p>Unleash Your Shopaholic Instincts. Elevate Your Style with our Ultimate Shopping Experience! Discover curated fashion, exclusive deals,
               and personalized recommendations. Your style revolution starts here with StyleSphere</p>
            <button className="latest-collection-btn">SHOP NOW</button>
        </div>
    </div>
   </div> 
  )
}

export default Hero;
