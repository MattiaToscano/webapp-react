import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="d-flex flex-column aling-items-center justify-content-center">
            <h2>Page not Found</h2>
            <p className="mt-3">Ci dispiace, la pagina che hai cercato non esiste</p>
            <Link to="/" className="btn btn-primary mt-3">
                Torna alla Home
            </Link>
        </div>
    )
}

export default NotFoundPage