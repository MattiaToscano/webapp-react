import React from 'react'

const BookPage = () => {
    return (
        <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
                <img src="https://picsum.photos/200/300" className="img-fluid" alt="Book Cover" />
            </div>
            <div className="col-12 col-md-6 col-lg-8">
                <h1>Titolo</h1>
                <p> Altre informazioni</p>
            </div>
        </div>
    )
}

export default BookPage