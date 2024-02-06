import React from 'react'
import './Subscription.css'

const Subscription = () => {
  return (
    <div className='newsletter'>
      <h1>Get Notified On Your Mail</h1>
      <p>Subscribe us and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Subscription
