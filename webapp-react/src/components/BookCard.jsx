import React from 'react'

const BookCard = () => {
    return (
        <div className="col-12 col-md-6 col-lg-4" key={book.id}>
            <div className="card-image-top">
                <img
                    src={book.imgage}
                    className="card-img-top"
                    alt="Book Cover"
                />
                <div className="card-body">
                    <h3 className="text-primary">{book.title}</h3>
                    <h4>{book.author}</h4>
                    <p>{book.abstract}</p>
                    <Link className="btn btn-primary" to={`/books/${book.id}`}>
                        Leggi Tutto
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BookCard