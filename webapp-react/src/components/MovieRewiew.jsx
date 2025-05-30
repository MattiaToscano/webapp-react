import React from 'react'

const MovieReview = ({ review }) => {
    return (
        <div className="card p-4 h-100">
            <p className="card-text">{review.text}</p>
            <div className="d-flex justify-content-between mt-auto">
                <p className="mb-0">Voto: {review.vote}/5</p>
                <p className="mb-0">Autore: {review.author || 'Anonymous'}</p>
            </div>
        </div>
    )
}

export default MovieReview