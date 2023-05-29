import React from 'react'
import "../style/LoginSection.css"
import Header from '../components/Header1'
import Footer from '../components/Footer1'



function LoginSection() {
  return (
    <div className="app-container">
        <Header></Header>
        <main>
         <form className='form'>
                <h2 className='form_title'>Inicia Sesion</h2>
                <p className='form_paragraph'>Aun no tienes cuenta <a href=''> Entra aqui</a></p>
                
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
        <Footer></Footer>
    </div>
         
  )
}

export default LoginSection