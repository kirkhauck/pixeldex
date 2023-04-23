import React from 'react';
import PropTypes from 'prop-types';
import './Sprite.css';

const Sprite = ({ sprite }) => {
  return (
      <img className='sprite' src={sprite} />
  );
}

export default Sprite;

Sprite.propTypes = {
  sprite: PropTypes.string.isRequired
}