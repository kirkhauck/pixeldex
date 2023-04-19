import React from 'react';
import { Link } from 'react-router-dom';
import './Pokemon.css';

const Pokemon = ({ frontSprite }) => {
  return (
    <figure>
      <Link to='/bulbasaur' className='pokemon-link'>
        <img src={frontSprite} />
        <figcaption>
          <p>#0001 | Pokemon</p>
        </figcaption>
      </Link>
    </figure>
  );
}

export default Pokemon;
