import React, { useState } from "react"
import './Movie.css'
import MovieInfo from "../MovieInfo/MovieInfo"

const Movie = ({ movie }) => {
    const [display, setDisplay] = useState(false)

    const getDisplay = () => {
        if (display === true) {
            return null
        } else {
            setDisplay(true)
        }
    }

    const closeDisplay = () => {
        setDisplay(false)
    }

    return (
        <>
            <div className={`Movie${display ? ' modal-open' : ''}`} onClick={getDisplay}>
                <img src={movie.image} alt='Movie Image' title={movie.title}/>
                {movie.rating >= 8
                    ? <div className='rating green'>{movie.rating}</div>
                    : <div className='rating amber'>{movie.rating}</div>
                }
                <div className='movie-overlay'>
                    <div className='overlay-title'>{movie.title}</div>
                    <span className='overlay-btn'>View Details</span>
                </div>
                {display && <MovieInfo id={movie.id} closeDisplay={closeDisplay}/>}
            </div>
        </>
    )
}

export default Movie
