import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

const FilmCard = ({ movie }) => {
    if (!movie) {
        return <div className="col-12 col-md-6 col-lg-4 mb-4">Dati non disponibili</div>
    }

    const { id, title, director, abstract, image } = movie

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
                <div className="card-image-top">
                    {image && image !== "undefined" ? (
                        <img
                            className="img-fluid"
                            src={`http://localhost:3000/img/movies/${movie.image}`}
                            alt={movie.title}
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    ) : (
                        <div className="d-flex align-items-center justify-content-center bg-light" style={{ height: '200px' }}>
                            <FontAwesomeIcon icon={faFilm} size="3x" className="text-muted" />
                        </div>
                    )}
                </div>
                <div className="card-body d-flex flex-column">
                    <h3 className="text-danger">{title || "Titolo non disponibile"}</h3>
                    <h4>
                        <em>{director || "Regista sconosciuto"}</em>
                    </h4>
                    <p className="flex-grow-1">
                        {abstract || "Descrizione non disponibile"}
                    </p>
                    <Link to={`/movie/${id}`} className="btn btn-danger mt-auto">
                        <FontAwesomeIcon icon={faFilm} /> More Info
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FilmCard