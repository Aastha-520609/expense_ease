import React from 'react'
import './ProductPage.css'
import arrow from '../Assests/arrow.png'

const ProductPage = () => {
  return (
    <div className = 'product-page'>
      HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /> {Product.category} <img src={arrow} alt="" /> {product_name}
    </div>
  )
}

export default ProductPage
