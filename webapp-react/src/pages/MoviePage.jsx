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
                setMovie(response.data)
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
                    <img
                        src={movie.image}
                        alt={movie.title}
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-8">
                    <h1 className="text-danger mb-3">{movie.title}</h1>
                    <h3 className="text-muted mb-3">
                        <em>di {movie.author}</em>
                    </h3>
                    <div className="mb-4">
                        <h5>Descrizione:</h5>
                        <p className="lead">{movie.excerpt}</p>
                    </div>
                    {movie.description && (
                        <div className="mb-4">
                            <h5>Trama completa:</h5>
                            <p>{movie.description}</p>
                        </div>
                    )}
                    {movie.genre && (
                        <div className="mb-3">
                            <span className="badge bg-danger fs-6">
                                {movie.genre}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MoviePage