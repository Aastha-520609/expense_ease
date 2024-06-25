import React from 'react'
import './CSS/Category.css'
import { ShopContext } from '../Context/Context'
import {useContext} from 'react'
import dropdown_icon from '../Components/Assests/dropdown_icon.png'
import Item from '../Components/Item/Item'


const Category = (props) => {
  const {all_product} = useContext(ShopContext);
  console.log('All Products:', all_product);

  const filteredProducts = all_product.filter(item => item.category === props.category);

  console.log('Filtered Products:', filteredProducts); 

  return (
    <div className = 'shop-category' >
       <img className = 'shopcategory-banner' src={props.banner} alt="" />
       <div className="shopcategory-index">
        <p>
        <span> Showing {filteredProducts.length} out of {all_product.length} products </span>
        </p>
        <div className="sort-by-category">
           Sort by <img src={dropdown_icon} alt="" />
        </div>
       </div>
       <div className="shopcategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
       <div className="shopcategory-loadmore">
          Explore more
       </div>
    </div>
  )
}

export default Category
