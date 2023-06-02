import React from 'react'
import "../style/LoginSection.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { NavLink, useNavigate } from 'react-router-dom'



function LoginSection() {
    const Navigate = useNavigate();
    function check(){
        var storedName = localStorage.getItem('name');
        var storedPw = localStorage.getItem('pw');
    
        var userName = document.getElementById('user');
        var userPw = document.getElementById('password');
            
        if(userName.value == storedName && userPw.value == storedPw){
            alert('Bienvenido.');
    
            Navigate('/Index');
    
        }else{
            alert('Email/Password Incorrectos');
        }
    }
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
                        <button onClick={check} className="form_submit"> Entrar </button>
                    </div>
            </form>
        </main>
        <Footer/>
    </div>
    
         
  )
}

export default LoginSection