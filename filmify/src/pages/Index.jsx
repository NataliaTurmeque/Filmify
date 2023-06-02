import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard'

function Index() {
    const name = localStorage.nombre
    const lastname =localStorage.lastname
  return (
    <div className='home'>
      <Navbar/>
      <div className='welcome-info'>
        <div>Bienvenido {name} {lastname}</div>
        <div>Tu plan actual es {} </div>
      </div>
      <div className='contend'>
          <MovieCard></MovieCard>
      </div>
      <h1>colocar api y card de api</h1>
      <h1>hacer tarjetas de planes(video)</h1>
      <h1>hacer el carrito de compra de esa tarjeta</h1>
      <Footer></Footer>
    </div>
  
    )
}

export default Index