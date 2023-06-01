import "../style/LoginSection.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'


function store(){
    const Navegate =useNavigate();
    var nombre = document.getElementById('name')
    var Lastname = document.getElementById('name')
    var name = document.getElementById('user');
    var pw = document.getElementById('password');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Es necesario un correo');

    }else if(pw.value.length == 0){
        alert('Es necesario una password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Por favor ingresa Email y password');

    }else if(pw.value.length > 8){
        alert('El password debe ser maximo de 8');

    }else if(!pw.value.match(numbers)){
        alert('El password debe tener un numero');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('El password debe tener una minuscula');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('El password debe tener una mayuscula');

    }else{
        localStorage.setItem("nombre",nombre.value)
        localStorage.setItem("lastname",Lastname.value)
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Bienvenido a Filmify');
        Navigate('/Login');
    }
}



function LoginSection() {
  return (
    <div className="app-container">
        <Header/>
        <main>
            <form className='form'>
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
                        <input type="email" id="user" className="form_input" placeholder=" "/>
                        <label htmlFor="name" className="form_label">Email:</label>
                        <span className="form_line"></span>
                    </div>
                    <div className='form_group'>
                        <input type="password" id="password" className="form_input" placeholder=" "/>
                        <label htmlFor="name" className="form_label">Password:</label>
                        <span className="form_line"></span>
                    </div>
                    <button className="form_submit" onClick={store} >Registrarse</button>
                </div>
            </form>
         </main>
        <Footer/>
    </div>
         
  )
}

export default LoginSection