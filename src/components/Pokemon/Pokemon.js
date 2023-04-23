import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Pokemon.css';

const Pokemon = ({ dexNum, name }) => {
  const spriteSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dexNum}.png`

  const formatDexNum = (num) => {
    const strNum = num.toString();
  
    if (strNum.length === 1) {
      return `#000${strNum}`
    } else if (strNum.length === 2) {
      return `#00${strNum}`
    } else if (strNum.length === 3) {
      return `#0${strNum}`
    } else {
      return `#${strNum}`
    }
  }

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