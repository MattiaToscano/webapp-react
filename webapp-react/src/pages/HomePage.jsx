import React from 'react'
import { useState, useEffect } from 'react'
import FilmsCard from '../components/FilmsCard'
import axios from 'axios'

const Homepage = () => {

    const [movies, setMovies] = useState([])

    const fetchMovies = () => {
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
        <div className="container">  {/* Aggiunto container */}
            <h1 className='text-danger'>Boolflix</h1>
            <h2>
                <i>Il tuo sito di streaming</i>
            </h2>
            <div className="row mt-4 gy-4">
                {movies.map((movie) => {
                    const { id, title, author, excerpt, image } = movie
                    return <FilmsCard key={`film-${id}`} movie={movie} />
                })}
            </div>
        </div>
    )
}

export default Homepage