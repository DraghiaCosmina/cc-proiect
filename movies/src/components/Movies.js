import React, { useState } from 'react'
import { MovieResult } from './MovieResult';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
    .then((res) => res.json())
    .then((data) => {
      if (!data.errors) {
        setMovies(data.results);
      } else {
        setMovies([])
      }
    })
  return (

    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Popular movies right now</h1>


        </div>

        {movies.length > 0 ? (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieResult movie={movie} key={movie.id} />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies</h2>
        )}
      </div>
    </div>

  )
}


