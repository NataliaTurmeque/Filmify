import {  createContext, useState } from "react";

export const shoppingCartContex = createContext();


export const ShoppingCartProvider = ({children}) => {

    const [count, setCount ] = useState(0);
   
    const [cartProducts, setCartProducts] = useState([])

     return(
        <shoppingCartContex.Provider value={
{ 
        count,
        setCount,
        cartProducts,
        setCartProducts
}
}>
            {children}
        </shoppingCartContex.Provider>
     )
}
