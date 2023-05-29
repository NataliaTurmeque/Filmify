import React from 'react'
import "../style/LoginSection.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'



function LoginSection() {
  return (
    <div className="app-container">
        <Header/>
        <main>
         <form className='form'>
                <h2 className='form_title'>Inicia Sesion</h2>
                <p className='form_paragraph'>Aun no tienes cuenta <NavLink to='/Register'> Entra aqui</NavLink></p>
                
                <div className='form_container'>
                    <div className='form_group'>
                        <input type="text" id="user"className="form_input" placeholder=" "/>
                        <label htmlFor="name" className="form_label">Email:</label>
                        <span className="form_line"></span>
                    </div>
                    <div className='form_group'>
                        <input type="text" id="password"  className="form_input" placeholder=" "/>
                        <label htmlFor="name" className="form_label">Password:</label>
                        <span className="form_line"></span>
                    </div>
                    <input type="submit" className="form_submit"  value="Entrar"/>
                </div>
            </form>
        </main>
        <Footer/>
    </div>
    
         
  )
}

export default LoginSection