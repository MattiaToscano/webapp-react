import React from 'react'
import { useState } from 'react';
import axios from 'axios';


const ReviewForms = () => {
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

    return (
        <div className="card">
            <div className="card-header">
                <h4> Aggiungi la tua recensione</h4>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="vote">Voto</label>
                        <input type="text" className="form-control" name="vote" placeholder="voto" required value={formData.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reviewText">Scrivi la tua recensione</label>
                        <textarea className="form-control" name="reviewText" rows="3" placeholder="La tua recensione" required></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default ReviewForms