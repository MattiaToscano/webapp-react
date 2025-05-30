import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const initialBooks = [
    {
        id: 1,
        title: 'Il Signore degli Anelli',
        author: 'J.R.R. Tolkien',
        abstract: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        imgage: 'https://picsum.photos/200/300',
    },

    {
        id: 1,
        title: 'Il Signore degli Anelli',
        author: 'J.R.R. Tolkien',
        abstract: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        imgage: 'https://picsum.photos/200/300',
    },

    {
        id: 1,
        title: 'Il Signore degli Anelli',
        author: 'J.R.R. Tolkien',
        abstract: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        imgage: 'https://picsum.photos/200/300',
    },

    {
        id: 1,
        title: 'Il Signore degli Anelli',
        author: 'J.R.R. Tolkien',
        abstract: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        imgage: 'https://picsum.photos/200/300',
    },

    {
        id: 1,
        title: 'Il Signore degli Anelli',
        author: 'J.R.R. Tolkien',
        abstract: 'Un epico racconto di avventura e amicizia in un mondo fantastico.',
        imgage: 'https://picsum.photos/200/300',
    }
]


const HomePage = () => {
    return (
        <div>
            <h1 className="text-primary">Bool Books </h1>
            <h2>
                <i>The nerdest Book </i>
            </h2>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card-image-top">
                        <img
                            src="https://picsum.photos/200/300"
                            className="card-img-top"
                            alt="Book Cover"
                        />
                        <div className="card-body">
                            <h3 className="text-primary">Titolo </h3>
                            <h4>Autore</h4>
                            <p>Excerpt</p>
                            <Link className="btn btn-primary" to="/books/5"> Leggi Tutto </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;