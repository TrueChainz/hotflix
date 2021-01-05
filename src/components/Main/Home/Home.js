import React, { useState, useEffect } from 'react'
import './Home.css'
import { MovieDB } from '../../../util/MovieDB'

import MovieList from '../MovieList/MovieList'
import Pagination from '../../Pagination/Pagination'



const Home = () => {
    // The states that stores the current lists of movie results
    const [movies, setMovies] = useState([])
    const [sortBy, setSortBy] = useState('popular')
    const [number, setNumber] = useState(1)
    const [lastPage, setLastPage] = useState(0)

    // This is an object used to reveal the different sorting types of movie
    const sortByOptions = {
        'Popular': 'popular',
        'Top Rated': 'top_rated',
        'Upcoming': 'upcoming'
    } 

    const incrementPage = () => {
        setNumber(number => number +1)
    }

    const decrementPage = () => {
        if (number <= 1) {
            return
        }
        setNumber(number => number - 1)
    }
  
    // This function is an event listener which changes the sorting type of movies
    const changeMovies = (sortBy) => {
        setMovies([])
        setNumber(1)
        MovieDB.movies(number, sortBy).then(movies => setMovies(movies))
        
    }

    // This function changes the colour of the sort by to allow the user to know which type the movie is sorted by
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

    const resetNumber = () => {
        setNumber(number => {
            number = 1
            return (
                number
            )
        })
    }

    const skipNumbers = () => {
        setNumber(number => {
            number = lastPage
            return (
                number
            )
        })
    }

    // This is the function which gets called when the componnent gets mounted
    // It calls a function from the MovieDB file 
    useEffect(() => {
        MovieDB.movies(number, 'popular').then(movies => setMovies(movies))
        MovieDB.numberOfPages(number, 'popular').then(pages => setLastPage(pages))
      }, [])

    // This function gets called when the sortby gets changed
    // Changes the list of movies you according to the filter
    useEffect(() => {
        changeMovies(sortBy)
    }, [sortBy])

    useEffect(() => {
        MovieDB.movies(number, sortBy).then(movies => setMovies(movies))
    },[number])

    // This function is responsible for laying out the sort by in order and setting the classname to active if the user has clicked on it
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
            <Pagination  
            number={number} 
            increment={incrementPage} 
            decrement={decrementPage}
            resetNumber={resetNumber}
            skip={skipNumbers}
            />
        </>
    )
}


// Using styled component for the home component
const homeTitleStyle = {
    display: 'flex',
    alignItems: 'center',
    minHeight: 150
}


export default Home
