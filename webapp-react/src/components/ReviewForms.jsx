import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const ReviewForms = ({ movieId, onReviewAdded }) => {
    //definizione dello stato per la recensione
    const initialData = { name: '', vote: '', text: '' };

    //Definisco la variabile di stato per la recensione(formData)
    const [formData, setFormData] = useState(initialData);
    const [error, setError] = useState(null);

    //Definizione della funzione per cambiare i campi input
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //Metodo che effettual la chiamata ajax per salvare la recensione
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);

        // Preparo un nuovo oggetto con i nomi dei campi corretti per l'API
        // e aggiungo anche un riferimento esplicito al movie_id
        const dataToSend = {
            author: formData.name,
            vote: parseInt(formData.vote, 10),
            content: formData.text,
            movie_id: movieId
        };

        console.log("Invio dati:", dataToSend);

        //Chiamata ajax per inviare la recensione
        axios.post(`http://localhost:3000/api/movies/${movieId}/reviews`, dataToSend, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                console.log("Risposta server:", response.data);
                setFormData(initialData); // Reset del form dopo l'invio
                if (onReviewAdded) onReviewAdded();
            })
            .catch((error) => {
                console.error("Errore:", error.response ? error.response.data : error.message);
                setError("Errore nell'invio della recensione. Riprova.");
            });
    };

    return (
        <div className="card">
            <div className="card-header">
                <h4> Aggiungi la tua recensione</h4>
            </div>
            <div className="card-body">
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="name">Nome</label>
                        <input type="text" className="form-control" name="name" placeholder="Il tuo nome" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="vote">Voto</label>
                        <input
                            type="number"
                            className="form-control"
                            name="vote"
                            min="1"
                            max="5"
                            placeholder="voto (1-5)"
                            required
                            value={formData.vote}
                            onChange={setFieldValue}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="text">Scrivi la tua recensione</label>
                        <textarea className="form-control" name="text" rows="3" placeholder="La tua recensione" required value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Invia recensione</button>
                </form>
            </div>
        </div>
    );
};

export default ReviewForms;