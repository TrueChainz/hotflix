import React, { useState, useEffect } from 'react'
import './Catalog.css'
import { MovieDB } from '../../../util/MovieDB'
import MovieList from '../MovieList/MovieList'

const Catalog = () => {

    const [term, setTerm] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const [border, setBorder] = useState('')
    const [movies, setMovies] = useState([])

    const searchBoxStyle = {
        border: border
    }

    const changeTerm = e => {
        setTerm(e.target.value)
    }

    const searchMovie = (term, pageNumber) => {
        if (term.length === 0) {
            alert('Please provide a search term')
            return
        }
        MovieDB.searchMovie(term, pageNumber).then(list => setMovies(list))
    }

    useEffect(() => {
        if (term.length === 0) {
            setBorder('')
            console.log(term.length)
        } else {
            console.log(term.length)
            setBorder('1px solid yellow')
        }
        
    },[term])

    return (
        <>
            <div className='darken' />
            <div className='Catalog'>
                <div className="container" style={catalogTitleStyle}>
                    <h1 className="home-title">Catalog</h1>
                </div>
            </div>
            <main className='sort'>
                <div className="container">
                    <div className='catalog-sort'>
                        <div className='search-field' style={searchBoxStyle}>
                            <input type="text" placeholder='Search movies...' value={term} onChange={changeTerm}/>
                            <button onClick={searchMovie.bind(this, term, pageNumber)}className='search-button'><ion-icon name="search-outline"></ion-icon></button>

                        </div>
                    </div>
                </div>
            </main>
            {movies.length > 0 ? <MovieList movies={movies}/> : <div style={placeholder}></div>}
        </>
    )
}

const catalogTitleStyle = {
    display: 'flex',
    alignItems: 'center',
    minHeight: 150
}

const placeholder = {
    backgroundColor: '#1a191f',
    position: 'absolute',
    zIndex: '-1',
    width: '100%',
    height: '100%',
    overflow: 'no-scroll'
}

export default Catalog
