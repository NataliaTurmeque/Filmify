import React from 'react'

function Index() {
    const name = localStorage.nombre
    const lastname =localStorage.lastname
  return (
    <>
      <div>Bienvenido {name} {lastname}</div>
      <h1>colocar api y card de api</h1>
      <h1>hacer tarjetas de planes(video)</h1>
      <h1>hacer el carrito de compra de esa tarjeta</h1>
    </>
  
    )
}

export default Index