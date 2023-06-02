import React , { useContext }from "react";
import Navbar from "../components/Navbar";
import OrderCard from "../components/OrderCard";
import { shoppingCartContex } from "../context";

function CartPage (){

const context = useContext(shoppingCartContex);
console.log(context.cartProducts)

    return(
      <div>
        <Navbar></Navbar>
    <h1 className='title1'>Los productos que tienes en el carrito son:</h1>
    <OrderCard></OrderCard>
      </div>
    )
}
export default CartPage;