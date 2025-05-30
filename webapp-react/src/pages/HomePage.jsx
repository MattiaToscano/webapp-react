import React from 'react';
import { useState } from 'react';
import BookCard from '../components/BookCard';

const initialBooks = [
    {
        id: 1,
        title: 'Il Signore degli Anelli',
        author: 'J.R.R. Tolkien',
        abstract: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        imgage: 'https://picsum.photos/200/300',
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
            <div className="row gy-4">
                {books.map((book) => {
                    return <BookCard book={book} key={`book/${book.id}`} />
                })}
            </div>
        </div>
    );
};

export default HomePage;