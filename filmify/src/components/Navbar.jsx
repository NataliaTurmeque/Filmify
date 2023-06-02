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
        <NavLink to="/Index"> <img src={Logo} alt=""/></NavLink>
        
        </div> 
        <ul className='sites'>      
            <li className="nav-item">
              <NavLink className="nav-link" to="">Catalogo</NavLink>
            </li>    
            <li className="nav-item">
            <NavLink className="nav-link" to="/">Planes</NavLink>
            </li>   
            <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <p className='count-navbar'>{contex.count}</p> <img className='shoping-car' src={car} alt=""/>Carrito 
              </NavLink>
            </li> 
            <li className="nav-item">
              <NavLink className="nav-link" to="">Cerrar sesion</NavLink>
            </li>   
        </ul>
    </nav>

    
  )
}

export default Navbar