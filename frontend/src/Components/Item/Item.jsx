import React from 'react'
import {Link} from 'react-router-dom'
import './Item.css'
import rupeeIcon from '../Assests/rupee.png'
import oldrupeeIcon from '../Assests/old-rupee.png'

const Item = (props) => {
  return (
    <div className = 'item'>
      <Link to = {`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
           <img src={rupeeIcon} alt="Rupee Icon" className="rupee-icon" />{props.new_price}
        </div>
        <div className="item-price-old">
          <img src={oldrupeeIcon} alt="Rupee Icon" className="old-rupee-icon" />{props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
