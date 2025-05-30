import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="text-center my-5">
            <h1 className="display-1">404</h1>
            <h2>Pagina non trovata</h2>
            <p>La pagina che stai cercando non esiste o è stata spostata.</p>
            <Link to="/" className="btn btn-primary">Torna alla Home</Link>
        </div>
    )
}

export default NotFoundPage