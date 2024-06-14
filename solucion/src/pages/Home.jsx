import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'

const Home = () => {
    return (
        <div className='mybody'>
            <h1 className='myh1'>Bienvenido nuevamente Usuario</h1>
            <div className="multi-button">
                <button ><Link to="/home">link</Link></button>
                <button ><Link to="/">link</Link></button>
                <button ><Link to="/">link</Link></button>
                <button ><Link to="/">link</Link></button>
                <button ><Link to="/">link</Link></button>
                <button ><Link to="/">link</Link></button>
                <button ><Link to="/registrousuarios">link</Link></button>
            </div>
        </div>
    )
}

export default Home
