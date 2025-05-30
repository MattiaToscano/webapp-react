import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

//Questo array è provvisorio
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
        image: 'https://picsum.photos/200/300',

    },

    {
        id: 3,
        title: 'Il Signore degli Anelli',
        author: 'J.R.R. Tolkien',
        abstract: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        image: 'https://picsum.photos/200/300',

    },

    {
        id: 4,
        title: 'Il Signore degli Anelli',
        author: 'J.R.R. Tolkien',
        abstract: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        image: 'https://picsum.photos/200/300',

    },

    {
        id: 5,
        title: 'Il Signore degli Anelli',
        author: 'J.R.R. Tolkien',
        abstract: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        image: 'https://picsum.photos/200/300',
        vote: 5
    }
]

const initialReviews = [
    {
        id: 1,
        text: 'Un libro fantastico, mi ha tenuto incollato fino all\'ultima pagina!',
        vote: 3,
    },
    {
        id: 1,
        text: 'Un libro fantastico, mi ha tenuto incollato fino all\'ultima pagina!',
        vote: 2,
    },
    {
        id: 1,
        text: 'Un libro fantastico, mi ha tenuto incollato fino all\'ultima pagina!',
        vote: 1,
    },
    {
        id: 1,
        text: 'Un libro fantastico, mi ha tenuto incollato fino all\'ultima pagina!',
        vote: 1231324,
    }
]

const BookPage = () => {
    const { id } = useParams();
    const [books] = useState(initialBooks);
    const [reviews, setReviews] = useState(initialReviews);

    const [book, setBook] = useState({});

    //Funzione che mi recupera l'array che ha l'id uguale a quello passato come parametro
    const fetchBook = () => {
        const findBook = books.find(actualBook => actualBook.id === parseInt(id));
        setBook(findBook || {});
    }

    useEffect(() => {
        fetchBook();
    }, []);

    return (
        <>
            <div>
                <div className="row">
                    {book === null ? (
                        `Caricamento in corso...`
                    ) : (
                        <>
                            <div className="col-12 col-md-6 col-lg-4">
                                <img src={book.image} className="img-fluid" alt="Book Cover" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-8">
                                <h1>{book.title}</h1>
                                <p>{book.author}</p>
                                <h3>{book.abstract}</h3>
                            </div>
                        </>
                    )}
                </div>

                <div className="row g-4">
                    <div className="d-flex justify-content-between">
                        <h3>Our community reviews</h3>
                    </div>
                    <div className="col-12">
                        <div className="card p-4">
                            <p>Testo recensione</p>
                            <p>Voto</p>
                            <p>Autore</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card p-4">
                            <p>Testo recensione</p>
                            <p>Voto</p>
                            <p>Autore</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookPage