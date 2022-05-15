import React from "react";
import { useDispatch } from "react-redux";
import { saveMovie } from "../utils/action";
import 'react-toastify/dist/ReactToastify.css'

export const MovieResult = ({ movie }) => {



  const dispatch = useDispatch()
  const addMovieToWatchlist = () => {
    dispatch(saveMovie(movie.id, movie.title, movie.poster_path))
  }


  return (

    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">

        <h3 className="title">{movie.title}</h3>
        <h4 className="release-date">{movie.release_date}</h4>


        <div className="controls">
          <button
            className="btn"


            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>



  );
};