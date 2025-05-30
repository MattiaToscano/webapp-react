import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Questo array è provvisorio
const initialMovies = [
    {
        id: 1,
        title: 'Il Signore degli Anelli',
        director: 'Peter Jackson',
        synopsis: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        poster: 'https://picsum.photos/200/300',
    },
    {
        id: 2,
        title: 'Inception',
        director: 'Christopher Nolan',
        synopsis: 'Un ladro specializzato nel rubare segreti dal subconscio durante il sonno.',
        poster: 'https://picsum.photos/200/300',
    },
    {
        id: 3,
        title: 'The Matrix',
        director: 'Wachowski Sisters',
        synopsis: 'Un hacker scopre la vera natura della realtà e il suo ruolo nella guerra contro le macchine.',
        poster: 'https://picsum.photos/200/300',
    },
    {
        id: 4,
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        synopsis: 'Le vite di due sicari, un pugile, la moglie di un gangster e due rapinatori si intrecciano.',
        poster: 'https://picsum.photos/200/300',
    },
    {
        id: 5,
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        synopsis: 'La storia di un uomo ingiustamente condannato e la sua straordinaria evasione.',
        poster: 'https://picsum.photos/200/300',
    }
]

const MoviePage = () => {
    const { id } = useParams();
    const [movies] = useState(initialMovies);
    const [movie, setMovie] = useState({});

    //Funzione che mi recupera l'array che ha l'id uguale a quello passato come parametro
    const fetchMovie = () => {
        const findMovie = movies.find(actualMovie => actualMovie.id === parseInt(id));
        setMovie(findMovie || {});
    }

    useEffect(() => {
        fetchMovie();
    }, [id]);

    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <img src={movie.poster} className="img-fluid" alt="Movie Poster" />
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                    <h1>{movie.title}</h1>
                    <p>{movie.director}</p>
                    <h3>{movie.synopsis}</h3>
                </div>
            </div>

            <div className="row g-4">
                <div className="d-flex justify-content-between">
                    <h3>Our community reviews</h3>
                </div>
                <div className="col-12">
                    <div className="card p-4">
                        <p>Testo recensione</p>
                        <p>Voto</p>
                        <p>Autore</p>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card p-4">
                        <p>Testo recensione</p>
                        <p>Voto</p>
                        <p>Autore</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviePage