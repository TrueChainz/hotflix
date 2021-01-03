import React from 'react'
import Movie from '../Movie/Movie'

const MovieList = ({ movies }) => {
    return (
        <div className='MovieList' style={mainMovieList}>
            <div className='container' style={movieLists}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>) }
            </div>
        </div>
    )
}

const mainMovieList = {
    backgroundColor: '#1a191f'
}

const movieLists = {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 30,
    width: '100%',
    paddingBottom: 30
}

export default MovieList

