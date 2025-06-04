import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar bg-primary mb-4'>
            <div className="container-fluid">
                <Link className='navbar-brand text-white' to="/">Home</Link>
                <Link className='text-white' to="/movies/create">Aggiungi Film</Link>
            </div>
        </nav>
    )
}

export default Header