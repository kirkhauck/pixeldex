import React from 'react';
import './Pokemon.css';

const Pokemon = ({ frontSprite }) => {
  return (
    <figure>
      <img src={frontSprite} />
      <figcaption>
        <p>#0001 | Pokemon</p>
      </figcaption>
    </figure>
  );
}

export default Pokemon;
