import React, { useEffect } from "react"
import './Movie.css'

const Movie = ({ movie }) => {
    return (
        <div className="Movie">
            <img src={movie.image} alt='Movie image'/>
            <div className='title'>{movie.title}</div>
            {movie.rating >= 8 ? <div className='rating green'>{movie.rating}</div> : <div className='rating amber'>{movie.rating}</div>}
            {/* <img src={}></img> */}
        </div>
    )
}

export default Movie
