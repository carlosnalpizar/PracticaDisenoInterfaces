import React from 'react'
import '../css/Login.css'

const Login = () => {
    return (
        <div className='log'>
                <div className='log mybody'> 
                    <div className="login">
                        <h3>Bienvenido al Sistema</h3>
                        <h3>Por favor, inicia sesión</h3>
                        <form>
                            <div className="text_area">
                                <input
                                    type="number"
                                    id="Empleados_Persona_Cedula"
                                    name="Empleados_Persona_Cedula"
                                    defaultValue=""
                                    className="text_input"
                                    placeholder='Usuario'
                                    autoComplete="username"
                                />
                            </div>
                            <div className="text_area">
                                <input
                                type="password"
                                id="Contraseña"
                                name="Contraseña"
                                defaultValue=""
                                className="text_input"
                                placeholder='Contrasena'
                                autoComplete="current-password"
                                />
                            </div>
                            <input
                                type="submit"
                                value="Ingresar"
                                className="btn"
                            />
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Login
