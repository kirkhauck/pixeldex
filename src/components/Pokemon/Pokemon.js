import React from 'react';
import './Pokemon.css';

const Pokemon = ({ frontSprite }) => {
  return (
    <div>
      <img src={frontSprite} />
      <p>#1 | Pokemon</p>
    </div>
  );
}

export default Pokemon;
