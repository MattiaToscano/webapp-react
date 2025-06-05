import React from 'react'
import { useState, useEffect } from 'react'
import FilmsCard from '../components/FilmsCard'
import axios from 'axios'
import Loader from '../components/Loader'
import GlobalContext from '../context/globalContext'

const Homepage = () => {

    const [movies, setMovies] = useState([])
    const { isLoading, setIsLoading } = React.useContext(GlobalContext); // Consumo il contesto globale


    const fetchMovies = () => {
        setIsLoading(true); // Imposto isLoading a true prima della richiesta
        axios.get('http://localhost:3000/api/movies')
            .then((response) => {
                console.log(response.data)
                setMovies(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <Loader>
            <div className="container">  {/* Aggiunto container */}
                <h1 className='text-danger'>Boolflix</h1>
                <h2>
                    <i>Il tuo sito di streaming</i>
                </h2>
                <div className="row mt-4 gy-4">
                    {movies.map((movie) => {
                        const { id, title, director, genre, abstract, image } = movie; // Campi corretti
                        return <FilmsCard key={`film-${id}`} movie={movie} />
                    })}
                </div>
            </div>
        </Loader>
    )
}

export default Homepage