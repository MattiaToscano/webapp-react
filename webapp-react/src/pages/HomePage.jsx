import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const initialBooks = [
    {
        id: 1,
        title: 'Il Signore degli Anelli',
        author: 'J.R.R. Tolkien',
        abstract: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        image: 'https://picsum.photos/200/300',
    },

    {
        id: 2,
        title: 'Il Signore degli Anelli',
        author: 'J.R.R. Tolkien',
        abstract: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        imgage: 'https://picsum.photos/200/300',
    },

    {
        id: 3,
        title: 'Il Signore degli Anelli',
        author: 'J.R.R. Tolkien',
        abstract: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        imgage: 'https://picsum.photos/200/300',
    },

    {
        id: 4,
        title: 'Il Signore degli Anelli',
        author: 'J.R.R. Tolkien',
        abstract: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        imgage: 'https://picsum.photos/200/300',
    },

    {
        id: 5,
        title: 'Il Signore degli Anelli',
        author: 'J.R.R. Tolkien',
        abstract: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        imgage: 'https://picsum.photos/200/300',
    }
]


const HomePage = () => {
    // Definisco la variabile di stato per i libri
    const [books, setBooks] = useState(initialBooks);

    return (
        <div>
            <h1 className="text-primary">Bool Books </h1>
            <h2>
                <i>The nerdest Book </i>
            </h2>
            <div className="row">
                {books.map((book) => (
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
                ))}
            </div>
        </div>
    );
};

export default HomePage;