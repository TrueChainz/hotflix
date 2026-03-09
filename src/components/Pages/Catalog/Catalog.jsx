import React, { useState, useEffect } from 'react'
import './Catalog.css'
import {titleStyle} from '../../../style'
import { MovieDB } from '../../../util/MovieDB'
import MovieList from '../../Main/MovieList/MovieList'
import { useSelector } from 'react-redux'

const Catalog = (props) => {

    const pageNumber = useSelector(state => state.pageNum)
    const [term, setTerm] = useState('')
    const [movies, setMovies] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [loading, setLoading] = useState(false)

    const NavComponent = props.components[0]
    const PaginationComponent = props.components[1]

    const changeTerm = e => {
        setTerm(e.target.value)
    }

    const searchMovie = (term, pageNumber) => {
        if (term.length === 0) {
            alert('Please provide a search term')
            return
        }
        setLoading(true)
        MovieDB.searchMovie(term, pageNumber).then(list => {
            setMovies(list)
            setLoading(false)
        })
        MovieDB.numberOfSearchPages(term, pageNumber).then(num => setTotalPage(num))
    }

    const keypressFunction = e => {
        if (e.key === 'Enter') {
            searchMovie(term, pageNumber)
        }
    }

    useEffect(() => {
        if (term.length > 0) {
            setLoading(true)
            MovieDB.searchMovie(term, pageNumber).then(list => {
                setMovies(list)
                setLoading(false)
            })
        }
    }, [pageNumber])

    useEffect(() => {
        document.title = props.title
    }, [])

    return (
        <>
            <NavComponent />
            <div className='Catalog'>
                <div className='catalog-hero-overlay' />
                <div className="container" style={titleStyle}>
                    <div>
                        <h1 className="catalog-title">Search Catalog</h1>
                        <p className="catalog-subtitle">Find any movie in our collection</p>
                    </div>
                </div>
            </div>
            <div className='sort'>
                <div className="container">
                    <div className='catalog-sort'>
                        <div className='search-field' onKeyPress={keypressFunction}>
                            <input type="text" placeholder='Search movies...' value={term} onChange={changeTerm}/>
                            <button onClick={searchMovie.bind(this, term, pageNumber)} className='search-button'>
                                <ion-icon name="search-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <MovieList movies={movies} loading={loading}/>
            {totalPage > 0 && <PaginationComponent number={pageNumber} last={totalPage}/>}
        </>
    )
}

export default Catalog
