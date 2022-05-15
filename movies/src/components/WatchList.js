import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listMovies } from '../utils/action';
import { MovieDetails } from './MovieDetails'
export const WatchList = () => {
  const dispatch = useDispatch()
  const movieList = useSelector((state) => state.movieList)
  const { loading, movies } = movieList;

  useEffect(() => {
    dispatch(listMovies({}))

  }, [dispatch]);



  return (
    <div>
      {loading ? <div className="loading">
        <i className="fa fac-spinner fa-spin"></i>Loading...
      </div>

        : (
          <div className="movie-page">
            <div className="container">
              <div className="header">
                <h1 className="heading">My Watchlist</h1>

              </div>

              {movies.movies.length > 0 ? (
                <div className="movie-grid">
                  {movies.movies.map((movie) => (
                    <MovieDetails movie={movie} key={movie.id} />
                  ))}
                </div>
              ) : (
                <h2 className="no-movies">No movies in your list! Add some!</h2>

              )}
            </div>
          </div>
        )
      }
    </div>

  )
}


