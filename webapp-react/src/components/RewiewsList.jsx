import React from 'react';

const ReviewsList = ({ reviews }) => {
    // Verifica se reviews esiste e ha elementi
    if (!reviews || reviews.length === 0) {
        return (
            <div className="mt-5">
                <h3 className="mb-4">Recensioni</h3>
                <div className="alert alert-info">
                    Nessuna recensione disponibile. Sii il primo a recensire!
                </div>
            </div>
        );
    }

    // Funzione per renderizzare le stelle
    const renderStars = (vote) => {
        if (!vote) return null;

        const stars = [];
        const fullStars = Math.floor(vote);
        const hasHalfStar = vote % 1 >= 0.5;

        // Stelle piene
        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`full-${i}`} className="bi bi-star-fill text-warning"></i>);
        }

        // Mezza stella
        if (hasHalfStar) {
            stars.push(<i key="half" className="bi bi-star-half text-warning"></i>);
        }

        // Stelle vuote
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<i key={`empty-${i}`} className="bi bi-star text-warning"></i>);
        }

        return <div className="mb-1">{stars}</div>;
    };

    return (
        <div className="mt-5">
            <h3 className="mb-4">Recensioni</h3>
            <div className="list-group">
                {reviews.map((review, index) => (
                    <div key={index} className="list-group-item list-group-item-action mb-3">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Recensione</h5>
                            <small className="text-muted">
                                {review.created_at ? new Date(review.created_at).toLocaleDateString() : ''}
                            </small>
                        </div>
                        {review.vote && renderStars(review.vote)}
                        <p className="mb-1">{review.text}</p>
                        <small className="text-muted">
                            {review.name || 'Anonimo'}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsList;