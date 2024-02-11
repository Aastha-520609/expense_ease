import React from 'react'
import './ProductPage.css'
import arrow_icon from '../Assests/arrow.png'

const ProductPage = (props) => {
  const {product} = props;

  if (!product) {
    return <div>Loading...</div>; // or handle the loading state accordingly
  }

  return (
    <div className = 'product-page'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default ProductPage
