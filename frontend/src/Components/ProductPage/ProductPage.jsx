import React from 'react'
import './ProductPage.css'
import arrow from '../Assests/arrow.png'

const ProductPage = (props) => {
  const {product} = props;

  if (!product) {
    return <div>Loading...</div>; // or handle the loading state accordingly
  }

  return (
    <div className = 'product-page'>
     
    </div>
  )
}

export default ProductPage
