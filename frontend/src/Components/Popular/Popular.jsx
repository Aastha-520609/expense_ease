import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
import {useState, useEffect} from 'react'
import popularProducts from '../Assests/data'
const BASE_URL = 'https://expense-easee.onrender.com';


const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);
 
  useEffect(() => {
    fetch(`${BASE_URL}/popularinwomen`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch popular products');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Popular products fetched:', data); // Check the fetched data in console
        setPopularProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching popular products:', error);
      });
  }, []);
 
  return (
    <div className='popular'>
       <h1>POPULAR IN WOMEN</h1>
       <hr/>
       <div className="popular-item">
         {popularProducts.map((item,i)=> {
            return <Item key={i} 
            id={item.id} 
            name={item.name} 
            image={`${BASE_URL}/images/${item.image}`}
            new_price={item.new_price} 
            old_price={item.old_price} 
            />
         })}
       </div>
    </div>
  )
}

export default Popular
