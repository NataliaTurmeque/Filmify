import { NavLink } from 'react-router-dom'
import React from 'react'
import Logo from '../assets/Logo.png'
import car from '../assets/shopping-card-svgrepo-com.png'
import '../style/Header2.css'


function Navbar() {
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
              <NavLink className="nav-link" to="/">Planes</NavLink>
            </li>   
            <li className="nav-item">
              <NavLink className="nav-link" to="/"> <img className='shoping-car' src={car} alt=""/>Carrito</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Cerrar sesion</NavLink>
            </li>   
        </ul>
    </nav>
  )
}

export default Navbar