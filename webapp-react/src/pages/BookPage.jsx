import React, { act, useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

//Questo array è provvisorio
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

const BookPage = () => {
    const { id } = useParams();
    const [books, setBooks] = useState(initialBooks);

    const [book, setBook] = useState({});

    //Funzione che mi recupera l'array che ha l'id uguale a quello passato come parametro
    const fetchBook = () => {
        // books.forEach((actualBook) => {
        //     if (actualBook.id === parseInt(id)) {
        //        setBook(actualBook);
        //     }
        //  });
    }

    const findBook = book.find(actualBook => actualBook.id === parseInt(id));
    setBook(findBook);

    useEffect(() => {
        fetchBook();
    }, []);


    return (
        <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
                <img src={book.image} className="img-fluid" alt="Book Cover" />
            </div>
            <div className="col-12 col-md-6 col-lg-8">
                <h1>{book.title}</h1>
                <p> {book.author}</p>
                <h3>{book.ecserpt}</h3>
            </div>
        </div>
    )
}

export default BookPage