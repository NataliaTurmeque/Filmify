import React from "react";
import "../style/SubscriptionCards.css";
import data from '../data/Suscriptions.json'
import Subscard from '../components/SubsCard'
import Navbar from '../components/Navbar'


function Products(){

    const products = data.precios

    return(
        <div>
            <div>
      <Navbar></Navbar>
            </div>
            <div className="containerPrice">
            
                {

                    products.map(items => (
    
                        <Subscard key={items.id} data={items}>

                        </Subscard>
                    ))
                }
            </div>
            </div>
          
            
            
    )
}
export default Products;