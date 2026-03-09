import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './MovieInfo.css'
import { MovieDB } from '../../../util/MovieDB'

const MovieInfo = ({id, closeDisplay}) => {
    const [movieDetails, setMovieDetails] = useState([])

    // Loads the movie details upon mounting
    useEffect(() => {
        MovieDB.movieDetail(id).then(details => setMovieDetails(details))
    }, [])

    // Lock background scroll while modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = '' }
    }, [])


    return createPortal(
        <>
            <div className='MovieInfo'>
                <header className='info-header'>
                    <div className='header-left'>
                        <h1 className='movie-detail-title'>{movieDetails.title}</h1>
                        <div className='header-meta'>
                            {movieDetails.genre && <span className='genre-tag'>{movieDetails.genre}</span>}
                            {movieDetails.rating && (
                                <span className='header-rating'>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                                    {movieDetails.rating}
                                </span>
                            )}
                        </div>
                    </div>
                    <button className='close-btn' onClick={closeDisplay} aria-label="Close">✕</button>
                </header>
                <div className='movie-info'>

                    <div className='poster-wrap'>
                        <img src={movieDetails.image} alt="Movie Cover Photo" title={movieDetails.title}/>
                        <div className='poster-fade'></div>
                    </div>

                    <section className='info-section'>

                        <div className='info-title'>
                            Genre
                            <span className='info'>{movieDetails.genre}</span>
                        </div>

                        <div className='info-title'>
                            Runtime
                            <span className='info'>{movieDetails.duration} mins</span>
                        </div>

                        <div className='info-title'>
                            Release Year
                            <span className='info'>{movieDetails.release}</span>
                        </div>

                        <div className='info-title'>
                            Rating
                            <span className='info rating-value'>{movieDetails.rating}</span>
                        </div>

                        <div className='info-title'>
                            Status
                            <span className='info'>{movieDetails.status}</span>
                        </div>

                        <div className='info-title'>
                            Language
                            <span className='info'>{movieDetails.language}</span>
                        </div>
                        {movieDetails.production
                        &&
                        <div className='info-title'>
                            Production
                            <span className='info'>{movieDetails.production}</span>
                        </div>
                        }

                        <div className='info-title summary-block'>
                            Summary
                            <span className='info'>{movieDetails.summary}</span>
                        </div>

                    </section>
                </div>
            </div>
            <div className='hide-background' onClick={closeDisplay}></div>
        </>,
        document.body
    )
}

export default MovieInfo
