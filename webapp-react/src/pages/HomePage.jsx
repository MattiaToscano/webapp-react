import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import FilmsCard from '../components/FilmsCard'




const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3000/api/movies')
            .then((resp) => {
                setMovies(resp.data);
            })
            .catch((error) => {
                console.error("Errore nel recupero dei film:", error);
            });
    }, []);

    return (
        <div className="container">
            <h1>I nostri film</h1>
            <div className="row g-4">
                {movies.map((movie) => (
                    <div className="col-12 col-md-6 col-lg-4" key={movie.id}>
                        <div className="card h-100">
                            <img src={movie.poster} className="card-img-top" alt={`Locandina di ${movie.title}`} />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">Regia: {movie.director}</p>
                                <Link to={`/movies/${movie.id}`} className="btn btn-primary">Dettagli</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage