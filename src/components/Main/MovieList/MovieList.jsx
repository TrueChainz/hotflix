import React, { memo } from 'react'
import Movie from '../Movie/Movie'

const MovieList = memo(({ movies }) => {
    return (
        <div className='MovieList' style={mainMovieList}>
            <div className='container' style={movieLists}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>) }
            </div>
        </div>
    )
})

const mainMovieList = {
    backgroundColor: '#0a0a0f'
}

const movieLists = {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 24,
    width: '100%',
    paddingBottom: 24
}

export default MovieList

