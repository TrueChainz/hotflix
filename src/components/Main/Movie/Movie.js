import React, { useState ,useEffect } from "react"
import './Movie.css'
import MovieInfo from "../MovieInfo/MovieInfo"

const Movie = ({ movie }) => {
    const [display, setDisplay] = useState(false)


    // This function is responsible for mounting the MovieInfo component
    // If the state is of the display is false then it changes the display state to true
    const getDisplay = () => {
        if (display === true) {
            return null
        } else {
            setDisplay(true)
        }
    }

    // This function is an event listener that changes the display state to false
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
