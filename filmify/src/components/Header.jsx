import { NavLink } from 'react-router-dom'
import React from 'react'
import Logo from '../assets/Logo.png'
import '../style/Header2.css'

function MainNavBar() {
  return (
    <nav>
        <div className='logo'> 
        <a href='http://localhost:5173'> <img src={Logo} alt="" /> </a> </div> 
        <ul className='sites'>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Login">Iniciar Sesion</NavLink>
            </li>      
            <li className="nav-item">
              <NavLink className="nav-link" to="/Register">Crear Perfil</NavLink>
            </li>    
        </ul>
    </nav>
  )
}

export default MainNavBar