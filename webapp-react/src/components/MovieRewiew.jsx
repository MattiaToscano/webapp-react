import React, { useEffect, useState } from 'react'
import axios from 'axios'


const MovieReviewsList = ({ movieId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/movies/${movieId}/reviews`)
            .then((resp) => {
                setReviews(resp.data);
            })
            .catch((error) => {
                console.error("Errore nel recupero delle recensioni:", error);
            });
    }, [movieId]);

    return (
        <div className="mt-5">
            <h3>Recensioni</h3>
            {reviews.length > 0 ? (
                <div className="row g-3">
                    {reviews.map((review) => (
                        <div className="col-12 col-md-6" key={review.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{review.name}</h5>
                                    <div className="mb-2">
                                        {"★".repeat(review.vote)} {"☆".repeat(5 - review.vote)}
                                    </div>
                                    <p className="card-text">{review.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Nessuna recensione disponibile.</p>
            )}
        </div>
    )
}

export default MovieReviewsList