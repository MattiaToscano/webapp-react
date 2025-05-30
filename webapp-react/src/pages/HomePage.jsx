import React from 'react';
import { useState } from 'react';
import BookCard from '../components/BookCard';



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