import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const initialData = {
    title: '',
    author: '',
    description: '',
    publisher: '',
    publicationDate: '',
}



const CreateFilmsPage = () => {
    const [formData, setFormData] = useState(initialData);

    const navigate = useNavigate();

    const setFieldValue = (e) => {
        const { name, value } = e.target;

        //controllo se il nome del campo che ho catturato tramite l'evento è image
        if (name === 'image') {
            setFormData({ ...formData, image: e.target.files[0] });
        }
        else {
            setFormData({ ...formData, [name]: value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        //chiamata ajax, in questo dobbiamo inviare anche files. quindi dobbiamo  aggiungere un terzo paramentro , l'indicazione che gli stiamo inviando come form-data
        axios.post(`http://localhost:3000/api/books`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((result) => {
            navigate('/'); // Reindirizza alla homepage dopo la creazione
        }).catch((error) => {
            console.error('Error creating book:', error);
        });
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Creazione nuovo libro</h2>
                        </div>
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <label htmlFor="title">Titolo</label>
                                        <input type="text" className="form-control" value={formData.title} onChange={setFieldValue} id="title" name="title" placeholder="Titolo del libro" required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="author">Autore</label>
                                        <input type="text" className="form-control" value={formData.author} onChange={setFieldValue} id="author" name="author" placeholder="Autore del libro" required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="description">Descrizione</label>
                                        <input type="text" className="form-control" value={formData.description} onChange={setFieldValue} id="description" name="description" placeholder="Descrizione del libro" required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="publisher">Pubblicatore</label>
                                        <input type="text" className="form-control" value={formData.publisher} onChange={setFieldValue} id="publisher" name="publisher" placeholder="Pubblicatore del libro" required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="publicationDate">Data Pubblicazione</label>
                                        <input type="text" className="form-control" value={formData.publicationDate} onChange={setFieldValue} id="publicationDate" name="publicationDate" placeholder="Data di pubblicazione" required />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary mt-3">Pubblica recensione</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateFilmsPage