import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Pokemon.css';
import { formatDexNum } from '../../utils/helpers';

const Pokemon = ({ dexNum, name }) => {
  const spriteSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dexNum}.png`

  return (
    <figure>
      <Link to={`/${name}`} className='pokemon-link'>
        <img src={spriteSrc} />
        <figcaption>
          <p>{`${formatDexNum(dexNum)} | ${name.toUpperCase()}`}</p>
        </figcaption>
      </Link>
    </figure>
  );
}

export default Pokemon;

Pokemon.propTypes = {
  dexNum: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}