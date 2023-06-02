import { NavLink } from 'react-router-dom'
import React from 'react'
import Logo from '../assets/Logo.png'
import car from '../assets/shopping-card-svgrepo-com.png'
import '../style/Header2.css'
import { useContext } from 'react'
import { shoppingCartContex } from '../context'


function Navbar() {

  const contex = useContext(shoppingCartContex);

  return (
    <nav>
        <div className='logo'> 
        <NavLink to="/"> <img src={Logo} alt=""/></NavLink>
        
        </div> 
        <ul className='sites'>      
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Catalogo</NavLink>
            </li>    
            <li className="nav-item">
            <a className="nav-link" href='http://localhost:5173/products'> Planes</a>
            </li>   
            <li className="nav-item">
              <a className="nav-link" href='http://localhost:5173/cart'><p className='count-navbar'>{contex.count}</p> <img className='shoping-car' src={car} alt=""/>Carrito </a>
              
            </li> 
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Cerrar sesion</NavLink>
            </li>   
        </ul>
    </nav>

    
  )
}

export default Navbar