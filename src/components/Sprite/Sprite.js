import React from 'react';
import './Sprite.css';

const Sprite = ({ sprite }) => {
  return (
      <img className='sprite' src={sprite} />
  );
}

export default Sprite;