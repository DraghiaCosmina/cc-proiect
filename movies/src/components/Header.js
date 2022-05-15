import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='inner-content'>
          <div className='brand'>
            <Link to='/'>Movies App</Link>
          </div>
          <ul className='nav-links'>
            <li>
              <Link to='/watchlist'>WatchList</Link>
            </li>
            <li>
              <Link to="/search" className='btn'>Search</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

