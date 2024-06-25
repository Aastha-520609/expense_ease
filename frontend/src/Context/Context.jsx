import React, {createContext, useState, useEffect} from "react";
const BASE_URL = 'https://expense-easee.onrender.com';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < 300 + 1; index++)
    {
       cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems ] = useState(getDefaultCart());

    useEffect(() => {
        fetch(`${BASE_URL}/allproducts`)
        .then((response)=> response.json())
        .then((data)=> setAll_Product(data))
        .catch(error => console.error('Error fetching products:', error));

        const authToken = localStorage.getItem('auth-token');
        if(authToken)
        {
            fetch(`${BASE_URL}/getcart`,{
                method: 'POST',
                headers:{
                    'auth-token': authToken,
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({})
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data))
            .catch(error => console.error('Error fetching cart items:', error));
        }
    },[]);
 
    const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1}));

    const authToken = localStorage.getItem('auth-token');
    if(authToken){
        fetch(`${BASE_URL}/addtocart`,{
            method: 'POST',
            headers:{
                'auth-token': authToken,
                'Content-Type':'application/json',
            },
            body:JSON.stringify({itemId : itemId}),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log('Add to cart response:', data);
        })
        .catch((error) => {
            console.error('Error adding to cart:', error);
        });
    }
   };

   const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}));

    const authToken = localStorage.getItem('auth-token');
    if(authToken)
    {
        fetch(`${BASE_URL}/removefromcart`,{
            method: 'POST',
            headers:{
                'auth-token': authToken,
                'Content-Type':'application/json',
            },
            body:JSON.stringify({itemId : itemId})
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log('Remove from cart response:', data);
        })
        .catch((error) => {
            console.error('Error removing from cart:', error);
        });
    }
   };

   const getTotalCartAmount = () => {
      let totalAmount = 0;
      for(const item in cartItems)
      {
        if(cartItems[item] > 0)
        {
            let itemInfo = all_product.find((product) => product.id === Number(item))
            totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
      return totalAmount;
   }

   const getTotalCartItems = () => {
     let totalItem = 0;
     for(const item in cartItems)
     {
        if(cartItems[item] > 0)
        {
           totalItem += cartItems[item];
        }
     }
     return totalItem;
   }


    const contextValue = { getTotalCartItems , getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

    return(
        <ShopContext.Provider value={contextValue}>
             {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
