import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/Context'
import { useParams } from 'react-router-dom'
import ProductPage from '../Components/ProductPage/ProductPage'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Description from '../Components/Description/Description'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'


const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <ProductPage product={product} />
      <ProductDisplay product={product} />
      <Description/>
      <RelatedProducts />
    </div>
  )
}

export default Product
