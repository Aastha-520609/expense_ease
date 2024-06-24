import React from 'react'
import './Hero.css'
import hero_image from '../Assests/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className = "hero-left">
            <h1>StyleSphere</h1>
            <h2>Your Stylish Beginning Awaits</h2>
            <p>Unleash Your Shopaholic Instincts. Elevate Your Style with our Ultimate Shopping Experience! Discover curated fashion, exclusive deals,
               and personalized recommendations. Your style revolution starts here with StyleSphere</p>
               <div>
                   <button className="latest-collection-btn">SHOP NOW</button>
               </div>
      </div>
      <div className = "hero-right">
        <img src={hero_image} alt="image" />
      </div>
   </div> 
  )
}

export default Hero;
