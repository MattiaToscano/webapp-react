import React from 'react'
import { useState } from 'react';

const initialData = {
    title: '',
    author: '',
    description: '',
    publisher: '',
    publicationDate: '',
}



const CreateFilmsPage = () => {
    const [formData, setFormData] = useState(initialData);

    const setFieldValue = (e) => {
        console.log(e)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Creazione nuovo libro</h2>
                    </div>
                    <div className="col-md-12"></div>
                    <form onSubmit="">
                        <div className="row">
                            <div className="col-12">
                                <label htmlFor="title">Titolo</label>
                                <input type="text" className="form-control" value={formData.title} onChange={setFieldValue} id="title" name="title" placeholder="Titolo del libro" required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="title">Autore</label>
                                <input type="text" className="form-control" value={formData.author} onChange={setFieldValue} id="title" name="title" placeholder="Titolo del libro" required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="title">Descrizione</label>
                                <input type="text" className="form-control" value={formData.description} onChange={setFieldValue} id="title" name="title" placeholder="Titolo del libro" required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="title">Pubblicatore</label>
                                <input type="text" className="form-control" value={formData.publisher} onChange={setFieldValue} id="title" name="title" placeholder="Titolo del libro" required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="title">Data Pubblicazione</label>
                                <input type="text" className="form-control" value={formData.publicationDate} onChange={setFieldValue} id="title" name="title" placeholder="Titolo del libro" required />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Pubblica recensione </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateFilmsPage