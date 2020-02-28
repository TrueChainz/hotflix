import React, { useState ,useEffect } from "react"
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
            <div className="Movie" onClick={getDisplay}>
                <img src={movie.image} alt='Movie image'/>
                <div className='title'>{movie.title}</div>
                {movie.rating >= 8 ? <div className='rating green'>{movie.rating}</div> : <div className='rating amber'>{movie.rating}</div>}
                {/* <img src={}></img> */}
                {display && <MovieInfo id={movie.id} closeDisplay={closeDisplay}/>}
            </div>
            
        </>
    )
}

export default Movie
