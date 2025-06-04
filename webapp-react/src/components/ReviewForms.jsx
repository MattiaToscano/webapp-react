import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const ReviewForms = ({ movieId, onReviewAdded }) => {
    //definizione dello stato per la recensione
    const initialData = { name: '', vote: '', reviewText: '' };

    //Definisco la variabile di stato per la recensione(formData)
    const [formData, setFormData] = useState(initialData);

    //Definizione della funzione per cambiare i campi input
    const setFieldValue = (e) => {
        const { value, name } = e.target;

        //Destrutturo e.target
        setFormData({ ...formData, [name]: value });
    };

    //Metodo che effettual la chiamata ajax per salvare la recensione
    const handleSubmit = (e) => {
        e.preventDefault();

        //Chiamata ajax per inviare la recensione
        axios.post(`http://localhost:3000/api/movies/${movieId}/reviews`, formData, {
            headers: { 'Content-Type': 'application/json' }
        }).then(() => {
            setFormData(initialData); // Reset del form dopo l'invio
            if (onReviewAdded) onReviewAdded();
        });
    };

    return (
        <div className="card">
            <div className="card-header">
                <h4> Aggiungi la tua recensione</h4>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="name">Nome</label>
                        <input type="text" className="form-control" name="name" placeholder="Il tuo nome" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="vote">Voto</label>
                        <input type="number" className="form-control" name="vote" placeholder="voto" required value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="reviewText">Scrivi la tua recensione</label>
                        <textarea className="form-control" name="reviewText" rows="3" placeholder="La tua recensione" required value={formData.reviewText} onChange={setFieldValue}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Invia recensione</button>
                </form>
            </div>
        </div>
    );
};

export default ReviewForms