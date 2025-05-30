import React from 'react'
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
        books.forEach((actualBook) => {
            if (actualBook.id === parseInt(id)) {
                setBook(actualBook);
            }
        });
    }


    return (
        <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
                <img src="https://picsum.photos/200/300" className="img-fluid" alt="Book Cover" />
            </div>
            <div className="col-12 col-md-6 col-lg-8">
                <h1>Titolo</h1>
                <p> Altre informazioni</p>
                <h3> Sinossi</h3>
            </div>
        </div>
    )
}

export default BookPage