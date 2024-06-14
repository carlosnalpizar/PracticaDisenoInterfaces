import React from 'react'
import '../css/RegProducto.css'

const RegProductos = () => {
return (
    <div className='log'>
                <div className='log mybody'> 
                    <div className="login">
                        <h3>Registro de Usuarios</h3>
                        <form >
                        <div className="text_area">
                                <input
                                    type="text"
                                    id="Empleados_Persona_Cedula"
                                    name="Empleados_Persona_Cedula"
                                    defaultValue=""
                                    className="text_input"
                                    placeholder='Nombre'
                                    autoComplete="username"
                                />
                            </div>
                            <div className="text_area">
                                <input
                                    type="text"
                                    id="Empleados_Persona_Cedula"
                                    name="Empleados_Persona_Cedula"
                                    defaultValue=""
                                    className="text_input"
                                    placeholder='Cedula'
                                    autoComplete="username"
                                />
                            </div>
                            <div className="text_area">
                                <input
                                    type="number"
                                    id="Empleados_Persona_Cedula"
                                    name="Empleados_Persona_Cedula"
                                    defaultValue=""
                                    className="text_input"
                                    placeholder='Correo'
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
                                value="Registrarse"
                                className="btn"
                            />
                        </form>
                    </div>
                </div>
            </div>
)
}

export default RegProductos


/* <div className='App'>
    <div className='mybody'>
    <form className='myform'>
    <label className='mylabel'>Codigo del Producto</label>
    <input className="myinput" type="text" id="firstname1" name="idProducto"></input>

    <label className='mylabel'>Nombre</label>
    <input className="myinput" type="text" id="firstname2" name="nombreProducto"></input>

    <label className='mylabel'>Cantidad</label>
    <input className="myinput" type="number" id="lastname1" name="cantidad"></input>

    <label className='mylabel' >Estado del Producto</label>
    <select className='myselect' id="estadoProducto" name="estadoProducto">
    <option value="A">A</option>
    <option value="B">B</option>
    </select>

    <label className='mylabel' >Precio</label>
    <input className="myinput" type="number" id="lastname2" name="precio"></input>

    <label className='mylabel' >Fecha de ingreso</label>
    <input className='myinput' type="date" id="firstname3" name="fechaIngreso"></input>

    <button className='mybutton' type="submit">Registrar</button>
</form>
</div>
</div>*/