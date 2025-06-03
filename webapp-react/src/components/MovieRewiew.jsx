import React from 'react'

const MovieRewiew = ({ review }) => {
    const { text, vote, name } = review
    return (
        <div className="col-12">
            <div className="card p-3 bg-secondary">
                <p>{text}</p>
                <p>{vote}</p>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default MovieRewiew;