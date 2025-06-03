import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const MoviePage = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchMovie = () => {
        setLoading(true)
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then((response) => {
                console.log('Movie data:', response.data)
                const movieData = response.data.data || response.data
                setMovie(movieData)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching movie:', error)
                setError('Film non trovato')
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchMovie()
    }, [id])

    if (loading) {
        return (
            <div className="container mt-4">
                <div className="text-center">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">Caricamento...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Errore!</h4>
                    <p>{error}</p>
                    <Link to="/" className="btn btn-danger">
                        Torna alla Home
                    </Link>
                </div>
            </div>
        )
    }

    if (!movie) {
        return (
            <div className="container mt-4">
                <div className="alert alert-warning">
                    Film non trovato
                </div>
            </div>
        )
    }

    return (
        <div className="container mt-4">
            <Link to="/" className="btn btn-outline-danger mb-3">
                ← Torna alla Home
            </Link>

            <div className="row">
                <div className="col-md-4">
                    {movie.image && movie.image !== 'undefined' ? (
                        <img
                            src={`http://localhost:3000/img/movies/${movie.image}`}
                            alt={movie.title}
                            className="img-fluid rounded shadow"
                            onError={(e) => {
                                console.error('Failed to load image:', `http://localhost:3000/img/movies/${movie.image}`);
                                e.target.style.display = 'none';
                            }}
                        />
                    ) : (
                        <div className="alert alert-info d-flex align-items-center justify-content-center">
                            <div className="text-center">
                                <i className="bi bi-image" style={{ fontSize: '3rem' }}></i>
                                <p className="mt-2 mb-0">Immagine non disponibile</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="col-md-8">
                    <h1 className="text-danger mb-3">{movie.title}</h1>
                    <h3 className="text-muted mb-3">
                        <em>di {movie.director}</em>
                    </h3>
                    <div className="mb-4">
                        <h5>Descrizione:</h5>
                        <p className="lead">{movie.abstract}</p>
                    </div>
                    {movie.genre && (
                        <div className="mb-3">
                            <span className="badge bg-danger fs-6">
                                {movie.genre}
                            </span>
                        </div>
                    )}
                    {movie.release_year && (
                        <div className="mb-3">
                            <span className="badge bg-secondary fs-6">
                                {movie.release_year}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MoviePage