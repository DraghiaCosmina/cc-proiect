import React, { useState } from 'react'
import { MovieResult } from './MovieResult';

export const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResult] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    if (e.target.value) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setResult(data.results);
          } else {
            setResult([])
          }
        });
    }


  };


  return (

    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input type='text'
              placeholder='Search'
              value={query}
              onChange={onChange} />
          </div>
          {results.length > 0 ? (
            <ul className='results'>
              {results.map((movie) => (
                <li key={movie.id}>
                  <MovieResult movie={movie} />
                </li>
              ))}

            </ul>
          ) :

            <h2 className='no-movies'> Search for a movie</h2>
          }
        </div>
      </div>
    </div>

  )
}


