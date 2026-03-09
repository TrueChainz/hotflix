import React, { memo } from 'react'
import Movie from '../Movie/Movie'

const SkeletonCard = () => (
    <div className='SkeletonCard'>
        <div className='skeleton-poster-img skeleton' />
    </div>
)

const MovieList = memo(({ movies, loading }) => {
    return (
        <div className='MovieList' style={mainMovieList}>
            <div className='container' style={movieLists}>
                {loading
                    ? Array.from({ length: 10 }, (_, i) => <SkeletonCard key={i} />)
                    : movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
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
