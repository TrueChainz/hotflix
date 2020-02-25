const apiKey = `7fbb4165a5639d9f08ecf4e47e0878ce`

const MovieDB = {
    // movies: async (pageNumber, sortBy) => {
    //     return fetch(`https://api.themoviedb.org/3/movie/${sortBy}?api_key=${apiKey}&language=en-US&page=${pageNumber}`)
    //     .then(data => data.json())
    //     .then(movieInfo => {
    //         return movieInfo.results.map(movie => {
    //             return {
    //                 id: movie.id,
    //                 title: movie.title,
    //                 image: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
    //                 rating: movie.vote_average
    //             }
    //         })
    //     })
    // },
    getImage: async (movieID) => {
        return fetch(`https://api.themoviedb.org/3/movie/${movieID}/images?api_key=${apiKey}&language=en-US`,
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then(data => console.log(data))        
    },
    movies: async (pageNumber, sortBy) => {
        const baseURL = `https://api.themoviedb.org/3/movie/${sortBy}?api_key=${apiKey}&language=en-US&page=${pageNumber}`
        const fetchURL = await fetch(baseURL)
        const data = await fetchURL.json()
        const movies = await data.results
        const movieArray = await movies.map(movie => {
            return {
                id: movie.id,
                title: movie.title,
                image: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
                rating: movie.vote_average
            }
        })
        return movieArray
    },
    getLists: async () => {
        const baseURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
        const fetchURL = await fetch(baseURL)
        const data = await fetchURL.json()
        const genres = await data.genres
        const genresArray = genres.map(genre => {
            return {
                id: genre.id,
                name: genre.name
            }
        })
        return genresArray
    },
    searchMovie: async (term, pageNumber) => {
        const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=${pageNumber}&include_adult=false`
    }
}

export {MovieDB}