import React, { useContext } from "react";
import "../style/SubscriptionCards.css";
import { shoppingCartContex } from "../context";



function SubsCard (data){
    const contex = useContext(shoppingCartContex)

    const addProductsToCart = (productsData) => {
        contex.setCount(contex.count + 1)
        contex.setCartProducts([...contex.cartProducts, productsData])
    
    }

    return(
<div className="containerSubCards">
  <div class="Subcard" >
  <div class="Subcontent">
    <div class="Subtitle">{data.data.title}</div>
    <div class="Subprice">{data.data.price}</div>
    <div class="Subtitle">por mes</div>
    <div class="Subdescription">{data.data.description}</div>
    <div className="list">
    <li>{data.data.item1}</li>
          <li>{data.data.item1}</li>
          <li>{data.data.item2}</li>
          <li>{data.data.item3}</li>
          <li>{data.data.item4}</li>
          </div>
  </div>
  
    <button className="Subbutton" onClick={() => addProductsToCart(data.data)}>
      Compralo ahora
    </button>
</div>
</div>
    )

}
export default SubsCard;