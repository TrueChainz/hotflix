import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import './Home.css'
import {titleStyle} from '../../../style'
import { MovieDB } from '../../../util/MovieDB'

import MovieList from '../MovieList/MovieList'
import Pagination from '../../Pagination/Pagination'
import { resetPage } from '../../../actions'



const Home = (props) => {
    const dispatch = useDispatch()
    const pageNumber = useSelector(state => state.pageNum)
    // The states that stores the current lists of movie results
    const [movies, setMovies] = useState([])
    const [sortBy, setSortBy] = useState('popular')
    const [lastPage, setLastPage] = useState(0)

    const NavComponent = props.component

    // This is an object used to reveal the different sorting types of movie
    const sortByOptions = {
        'Popular': 'popular',
        'Top Rated': 'top_rated',
        'Upcoming': 'upcoming'
    } 

    // This function is an event listener which changes the sorting type of movies
    const changeMovies = (sortBy) => {
        setMovies([])
        dispatch(resetPage())
        MovieDB.movies(pageNumber, sortBy).then(movies => setMovies(movies))
        
    }

    // This function changes the colour of the sort by to allow the user to know which type the movie is sorted by
    const changeClassName = sortByOption => {
        if (sortByOption === sortBy) {
            return 'active'
        } else {
            return ''
        }
    }

    // This function is an event listener that changes the sortBy state if needed
    const changeSortBy = newSortBy => {
        if (newSortBy === sortBy) {
            return
        }
        setSortBy(newSortBy)
    }

    // This function gets called when the sortby gets changed
    // Changes the list of movies you according to the filter
    useEffect(() => {
        changeMovies(sortBy)
        MovieDB.numberOfPages(pageNumber, sortBy).then(pages => setLastPage(pages))
    }, [sortBy])

    useEffect(() => {
        MovieDB.movies(pageNumber, sortBy).then(movies => setMovies(movies))
    },[pageNumber])

    // This function is responsible for laying out the sort by in order and setting the classname to active if the user has clicked on it
    const renderSorts = () => {
        return Object.keys(sortByOptions).map(sortBy => {
            let sortByOptionValue = sortByOptions[sortBy]
            return <li onClick={changeSortBy.bind(this, sortByOptionValue)} key={sortByOptionValue} className={changeClassName(sortByOptionValue)}>{sortBy}</li>
        })
    }

    // This is the function which gets called when the componnent gets mounted
    // It calls a function from the MovieDB file 
    useEffect(() => {
        MovieDB.movies(pageNumber, sortBy).then(movies => setMovies(movies))
        MovieDB.numberOfPages(pageNumber, sortBy).then(pages => setLastPage(pages))
        document.title = props.title
      }, [])

    return (
        <>
            <NavComponent/>
            <div className='darken' />
            <div className='Home'>
                <div className="container" style={titleStyle}>
                    <h1 className='home-title'>Home</h1>
                </div>
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
            number={pageNumber} 
            last={lastPage}
            />
        </>
    )
}

export default Home
