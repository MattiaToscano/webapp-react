import React from 'react';
import { Card } from 'react-bootstrap';
import StarRating from './StarRating';


const ReviewCard = ({ review }) => {
    const { username, rating, comment, date } = review;

    return (
        <Card className="mb-3 shadow-sm">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0">{username}</h5>
                    <StarRating rating={rating} />
                </div>
                <Card.Text>{comment}</Card.Text>
                <div className="text-muted small">
                    {new Date(date).toLocaleDateString()}
                </div>
            </Card.Body>
        </Card>
    );
};

export default ReviewCard;