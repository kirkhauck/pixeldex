import React from 'react';
import PropTypes from 'prop-types';
import './Sprite.css';

const Sprite = ({ id, sprite, pokemonName,  }) => {
  return (
      <img className='sprite' src={sprite} alt={`${pokemonName} sprite ${id}`} />
  );
}

export default Sprite;

Sprite.propTypes = {
  id: PropTypes.number.isRequired,
  sprite: PropTypes.string.isRequired,
  pokemonName: PropTypes.string.isRequired
}