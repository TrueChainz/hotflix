import React, { useState, useEffect } from 'react'
import './Home.css'
import { MovieDB } from '../../../util/MovieDB'

import MovieList from '../MovieList/MovieList'



const Home = () => {
    const [movies, setMovies] = useState([])
    const [sortBy, setSortBy] = useState('popular')

    const sortByOptions = {
        'Popular': 'popular',
        'Top Rated': 'top_rated',
        'Upcoming': 'upcoming'
    } 
  
    const changeMovies = (sortBy) => {
        setMovies([])
        MovieDB.movies(1, sortBy).then(movies => setMovies(movies))
    }

    
    const changeClassName = sortByOption => {
        if (sortByOption === sortBy) {
            return 'active'
        } else {
            return ''
        }
    }

    const changeSortBy = newSortBy => {
        if (newSortBy === sortBy) {
            return
        }
        setSortBy(newSortBy)
    }

    useEffect(() => {
        MovieDB.movies(1, 'popular').then(movies => setMovies(movies))
      }, [])


    useEffect(() => {
        changeMovies(sortBy)
    }, [sortBy])

    const renderSorts = () => {
        return Object.keys(sortByOptions).map(sortBy => {
            let sortByOptionValue = sortByOptions[sortBy]
            return <li onClick={changeSortBy.bind(this, sortByOptionValue)} key={sortByOptionValue} className={changeClassName(sortByOptionValue)}>{sortBy}</li>
        })
    }

    return (
        <>
            <div className='darken' />
            <div className='Home'>
                <div className="container" style={homeTitleStyle}>
                    <h1 className='home-title'>Home</h1>
                </div>
                {/* <MovieList /> */}
            </div>
            <div className='home-sort'>
                <div className='container'>
                    <ul className='home-lists'>
                        {renderSorts()}
                    </ul>
                </div>
            </div>
            <MovieList movies={movies}/>
            
        </>
    )
}

const homeTitleStyle = {
    display: 'flex',
    alignItems: 'center',
    minHeight: 150
}


export default Home
