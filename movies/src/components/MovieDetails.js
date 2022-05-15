import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteMovie } from '../utils/action'

export const MovieDetails = ({ movie }) => {

  const dispatch = useDispatch()
  const removeMoviefromWatchlist = () => {
    dispatch(deleteMovie(movie.movieId))
    window.location.reload(false);
  }
  return (

    <div className="movie-card">


      <img
        src={`https://image.tmdb.org/t/p/w200${movie.moviePathPoster}`}
        alt={`${movie.movieTitle} Poster`}
      />

      <div className="info">

        <h3 className="title">{movie.movieTitle}</h3>

        <div className="controls">
          <button
            className="btn"

            onClick={() => removeMoviefromWatchlist(movie)}
          >
            Remove from Watchlist
          </button>
        </div>
      </div>
    </div>
  )
}

