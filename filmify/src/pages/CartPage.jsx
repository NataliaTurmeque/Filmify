import React , { useContext }from "react";
import OrderCard from "../components/OrderCard";
import { shoppingCartContex } from "../context"; 
import "../style/Home.css"


function CartPage (){

     const contex = useContext(shoppingCartContex)
    console.log('Todos los items del carrito', contex.cartProducts)


    return(
      <div>
    <h1 className='title1'>Los productos que tienes en el carrito son:</h1>
    <div>
    {contex.cartProducts.map(product => (
      
        <OrderCard key={product.id}></OrderCard>))}

    
    </div>
      </div>
    )
}
export default CartPage;