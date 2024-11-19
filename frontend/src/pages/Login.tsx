import React from 'react'

interface loginProps {
    isLogin: () => void;
}

const Login:React.FC<loginProps> = ({ isLogin }) => {

    const handleIniciarSesion = (e:React.FormEvent) => {
        e.preventDefault();

        isLogin();
    }

  return (
    <form onSubmit={handleIniciarSesion} method="post" className='Login'>
        <h1>Iniciar Sesion</h1>

        <div className='inputs'>
            <div className='inputsContainer'>
                <span className='text'>Correo</span>
                <input type="email" name="email" id="email" required/>
            </div>

            <div className='inputsContainer'>
                <span className='text'>Contraseña</span>
                <input type="password" name="password" id="password" required/>

                <span className='linkRegister'>¿No tienes una cuenta? <a href="#">Registrarse</a></span>
            </div>
        </div>

        <button type="submit">
            <span>Iniciar Sesión</span>
        </button>

    </form>
      
  )
}

export default Login
