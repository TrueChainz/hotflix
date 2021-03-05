import React, { useState, useEffect } from 'react'
import './MovieInfo.css'
import { MovieDB } from '../../../util/MovieDB'

const MovieInfo = ({id, closeDisplay}) => {
    const [movieDetails, setMovieDetails] = useState([])

    // Loads the movie details upon mounting
    useEffect(() => {
        MovieDB.movieDetail(id).then(details => setMovieDetails(details))
    },[])


    return (
        <>
            <div className='MovieInfo'>
                <header className='info-header'>
                    <h1 className='movie-detail-title'>{movieDetails.title}</h1>
                    <div className='lines' onClick={closeDisplay}>
                        <div className='line line-1'></div>
                        <div className='line line-2'></div>
                    </div>
                </header>
                <div className='movie-info'>

                    <img src={movieDetails.image} alt="Movie Cover Photo" title={movieDetails.title}/>

                    <section className='info-section'>

                        <div className='info-title'>
                            Genre: 
                            <span className='info'>{movieDetails.genre}</span>
                        </div>

                        <div className='info-title'>
                            Runtime:
                            <span className='info'>{movieDetails.duration} mins</span>
                        </div>

                        <div className='info-title'>
                            Release Year:
                            <span className='info'>{movieDetails.release}</span>
                        </div>

                        <div className='info-title'>
                            Rating:
                            <span className='info'>{movieDetails.rating}</span>
                        </div>

                        <div className='info-title'>
                            Status:
                            <span className='info'>{movieDetails.status}</span>
                        </div>

                        <div className='info-title'>
                            Language:
                            <span className='info'>{movieDetails.language}</span>
                        </div>
                        {movieDetails.production 
                        && 
                        <div className='info-title'>
                            Production:
                            <span className='info'>{movieDetails.production}</span>
                        </div>
                        }

                        <div className='info-title'>
                            Summary:
                            <span className='info'>{movieDetails.summary}</span>
                        </div>

                    </section>
                </div>
            </div>
            <div className='hide-background'></div>
        </>
    )
}

export default MovieInfo
