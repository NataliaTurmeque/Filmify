import React from "react";
import "../style/cards.css";

function Cards (){
    return(
      <div className="container-Class">

        <div className="card-dos">
          <div className="icon-dos">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="8" r="4" />
                <rect x="7.5" y="13" width="9" height="8" rx="33" ry="2" />
               </svg>
          </div>
          <p className="title-dos">¿Quiénes somos?</p>
          <p className="text-dos">Somos una pagina web que ofrece el mejor servicio de Streaming con los precios más accesibles</p>
      </div>


      <div className="card-dos">
        <div className="icon-dos">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round">
        <text x="50%" y="50%" dy="0.35em" text-anchor="middle">$</text>
      </svg>
        </div>
        <p className="title-dos">Precios</p>
        <p className="text-dos">El precio varia dependiendo del paquete que elijas, para saber más te invitamos a crear una cuenta en Filmify </p>
      </div>


      <div className="card-dos-exc">
          <div className="icon-dos-exc">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="6" width="18" height="10" rx="2" ry="2" />
              <path d="M8 17h8M12 17v3" /></svg>
          </div>
            <p className="title-dos-exc">¿Qué puedes ver?</p>
            <p className="text-dos-exc">Hay un repertorio bastante amplio de películas y series, sin embargo, depende de cada subscricion que puedes ver. Te invitamos a crear tu cuenta en Filmify y ver nuestros planes</p>
      </div>
</div>
    )
}
export default Cards;