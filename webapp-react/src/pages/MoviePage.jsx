import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import MovieReviewsList from '../components/MovieRewiew';





const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);


    //Funzione che mi recupera l'array che ha l'id uguale a quello passato come parametro
    const fetchMovie = () => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then((resp) => {
                setMovie(resp.data);
            })
            .catch((error) => {
                console.error("Errore nel recupero del film:", error);
            });

        useEffect(() => {
            fetchMovie();
        }, []);

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
                <MovieReview movieID={id} />
            </div>
        )
    }
}
export default MoviePage