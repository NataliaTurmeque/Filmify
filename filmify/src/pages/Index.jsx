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
         <MovieCard></MovieCard>
      <Footer></Footer>
    </div>
  
    )
}

export default Index