import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import './Home.css'
import {titleStyle} from '../../../style'
import { MovieDB } from '../../../util/MovieDB'

import MovieList from '../../Main/MovieList/MovieList'
import { resetPage } from '../../../actions'



const Home = (props) => {
    const dispatch = useDispatch()
    const pageNumber = useSelector(state => state.pageNum)
    // The states that stores the current lists of movie results
    const [movies, setMovies] = useState([])
    const [sortBy, setSortBy] = useState('popular')
    const [lastPage, setLastPage] = useState(0)
    const [loading, setLoading] = useState(true)

    const NavComponent = props.components[0]
    const PaginationComponent = props.components[1]

    // This is an object used to reveal the different sorting types of movie
    const sortByOptions = {
        'Popular': 'popular',
        'Top Rated': 'top_rated',
        'Upcoming': 'upcoming'
    } 

    const changeClassName = sortByOption => sortByOption === sortBy ? 'active' : ''

    const changeSortBy = newSortBy => {
        if (newSortBy === sortBy) return
        dispatch(resetPage())
        setSortBy(newSortBy)
    }

    useEffect(() => {
        setLoading(true)
        MovieDB.movies(pageNumber, sortBy).then(movies => {
            setMovies(movies)
            setLoading(false)
        })
        MovieDB.numberOfPages(pageNumber, sortBy).then(pages => setLastPage(pages))
    }, [pageNumber, sortBy])

    useEffect(() => {
        document.title = props.title
    }, [])

    const renderSorts = () => {
        return Object.keys(sortByOptions).map(sortBy => {
            let sortByOptionValue = sortByOptions[sortBy]
            return <li onClick={changeSortBy.bind(this, sortByOptionValue)} key={sortByOptionValue} className={changeClassName(sortByOptionValue)}>{sortBy}</li>
        })
    }

    return (
        <>
            <NavComponent/>
            <div className='darken' />
            <div className='Home'>
                <div className="container" style={titleStyle}>
                    <div>
                        <h1 className='home-title'>Discover Movies</h1>
                        <p className='home-subtitle'>Browse the latest and greatest films</p>
                    </div>
                </div>
            </div>
            <div className='home-sort'>
                <div className='container'>
                    <ul className='home-lists'>
                        {renderSorts()}
                    </ul>
                </div>
            </div>
            <MovieList movies={movies} loading={loading}/>
            <PaginationComponent  
            number={pageNumber} 
            last={lastPage}
            />
        </>
    )
}

export default Home
