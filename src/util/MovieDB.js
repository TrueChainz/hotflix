const apiKey = import.meta.env.VITE_APP_API_KEY;

const MovieDB = {
  movies: async (pageNumber, sortBy) => {
    const baseURL = `https://api.themoviedb.org/3/movie/${sortBy}?api_key=${apiKey}&language=en-US&page=${pageNumber}`;
    const fetchURL = await fetch(baseURL);
    const data = await fetchURL.json();
    const movies = await data.results;
    const movieArray = await movies.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        image: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
        rating: movie.vote_average,
      };
    });
    return movieArray;
  },

  numberOfPages: async (pageNumber, sortBy) => {
    const baseURL = `https://api.themoviedb.org/3/movie/${sortBy}?api_key=${apiKey}&language=en-US&page=${pageNumber}`;
    const fetchURL = await fetch(baseURL);
    const data = await fetchURL.json();
    return data.total_pages;
  },
  searchMovie: async (term, pageNumber) => {
    const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${term}&page=${pageNumber}&include_adult=false`;
    const fetchURL = await fetch(baseURL);
    const data = await fetchURL.json();
    const movies = data.results.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        image: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
        rating: movie.vote_average,
      };
    });
    return movies;
  },
  numberOfSearchPages: async (term, pageNumber) => {
    const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${term}&page=${pageNumber}&include_adult=false`;
    const fetchURL = await fetch(baseURL);
    const data = await fetchURL.json();
    return data.total_pages;
  },
  movieDetail: async (id) => {
    const baseURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    return fetch(baseURL)
      .then((data) => data.json())
      .then((movie) => {
        if (movie.production_companies.length > 0) {
          return {
            title: movie.title,
            image: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
            backup: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
            summary: movie.overview,
            rating: movie.vote_average,
            duration: movie.runtime,
            release: movie.release_date.slice(0, 4),
            genre: movie.genres[0]["name"],
            language: movie.spoken_languages[0]["name"],
            production: movie.production_companies[0]["name"],
            status: movie.status,
          };
        } else {
          return {
            title: movie.title,
            image: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
            backup: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
            summary: movie.overview,
            rating: movie.vote_average,
            duration: movie.runtime,
            release: movie.release_date.slice(0, 4),
            genre: movie.genres[0]["name"],
            language: movie.spoken_languages[0]["name"],
            status: movie.status,
          };
        }
      });
  },
};

export { MovieDB };
