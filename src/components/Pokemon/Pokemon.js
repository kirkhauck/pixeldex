import React from 'react';
import { Link } from 'react-router-dom';
import './Pokemon.css';

const Pokemon = ({ dexNum, name }) => {
  const spriteSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dexNum}.png`

  return (
    <figure>
      <Link to='/bulbasaur' className='pokemon-link'>
        <img src={spriteSrc} />
        <figcaption>
          <p>{`${dexNum} | ${name}`}</p>
        </figcaption>
      </Link>
    </figure>
  );
}

export default Pokemon;
