import "../style/LoginSection.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
function LoginSection() {
  return (
    <div className="app-container">
        <Header/>
        <main>
         <form className='form' action="">
                <h2 className='form_title'>Unete a Filmify</h2>                
                <div className='form_container'>
                    <div className='form_group'>
                        <input type="text" id="name" className="form_input" placeholder=" "/>
                        <label htmlFor="name" className="form_label">Nombre:</label>
                        <span className="form_line"></span>
                    </div>
                    <div className='form_group'>
                        <input type="text" id="lastname" className="form_input" placeholder=" "/>
                        <label htmlFor="name" className="form_label">Apellido:</label>
                        <span className="form_line"></span>
                    </div>
                    <div className='form_group'>
                        <input type="text" id="user" className="form_input" placeholder=" "/>
                        <label htmlFor="name" className="form_label">Email:</label>
                        <span className="form_line"></span>
                    </div>
                    <div className='form_group'>
                        <input type="text" id="password" className="form_input" placeholder=" "/>
                        <label htmlFor="name" className="form_label">Password:</label>
                        <span className="form_line"></span>
                    </div>
                    <input type="submit" className="form_submit" value="Entrar"/>
                </div>
            </form>
         </main>
        <Footer/>
    </div>
         
  )
}

export default LoginSection