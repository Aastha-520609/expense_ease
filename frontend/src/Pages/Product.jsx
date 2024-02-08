import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/Context'
import { useParams } from 'react-router-dom'
import ProductPage from '../Components/ProductPage/ProductPage'

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === productId)
  return (
    <div>
      <ProductPage product={product} />
    </div>
  )
}

export default Product
