import React, { useContext } from "react";
import "../style/SubscriptionCards.css";
import { shoppingCartContex } from "../context";



const SubsCard = (data) =>{
    
    const contex = useContext(shoppingCartContex)

    const addProductsToCart = (productsData) => {
        contex.setCount(contex.count + 1)
        contex.setCartProducts([...contex.cartProducts, productsData])

    }
  
    return(
<div className="containerSubCards">
  <div className="Subcard" >
  <div className="Subcontent">
    <div className="Subtitle">{data.data.title}</div>
    <div className="Subprice">{data.data.price}</div>
    <div className="Subtitle">por mes</div>
    <div className="Subdescription">{data.data.description}</div>
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
    );

}
export default SubsCard;