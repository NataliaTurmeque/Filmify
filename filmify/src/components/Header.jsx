import { NavLink } from 'react-router-dom'
import React from 'react'
import Logo from '../assets/Logo.png'
import '../style/Header2.css'

function MainNavBar() {
  return (
    <nav>
        <div className='logo'> 
        <NavLink to="/"> <img src={Logo} alt=""/></NavLink>
        
        </div> 
        <ul className='sites'>   
            <li className="nav-item">
              <NavLink className="nav-link" to="/Register">Crear Perfil</NavLink>
            </li>    
            <li className="nav-item">
              <NavLink className="nav-link" to="/Login">Iniciar Sesion</NavLink>
            </li>   
        </ul>
    </nav>
  )
}

export default MainNavBar