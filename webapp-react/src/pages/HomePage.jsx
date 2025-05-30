import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initialMovies = [
    {
        id: 1,
        title: 'Il Signore degli Anelli',
        director: 'Peter Jackson',
        synopsis: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        poster: 'https://picsum.photos/200/300',
    },
    // altri film...
]

const HomePage = () => {
    const [movies] = useState(initialMovies);

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