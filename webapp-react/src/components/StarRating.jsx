import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating, maxStars = 5 }) => {
    // Arrotonda il rating al più vicino 0.5
    const roundedRating = Math.round(rating * 2) / 2;

    return (
        <div className="star-rating d-inline-block">
            {[...Array(maxStars)].map((_, index) => {
                // Per ogni stella, controlla se è piena, mezza o vuota
                const isFilled = index + 1 <= roundedRating;
                return (
                    <FontAwesomeIcon
                        key={index}
                        icon={isFilled ? solidStar : regularStar}
                        className="text-warning"
                    />
                );
            })}
            <span className="ms-2 text-muted">({rating.toFixed(1)})</span>
        </div>
    );
};

export default StarRating;