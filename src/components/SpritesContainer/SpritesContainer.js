import React from 'react';
import './SpritesContainer.css';
import Sprite from '../Sprite/Sprite';

// Temp placeholders for styling
import { bulbasaur } from '../../assets/mock-sprites';
import { charmander } from '../../assets/mock-sprites';

const SpritesContainer = () => {
  const spriteKeys = Object.keys(bulbasaur);
  const sprites = spriteKeys.map(key => {
    if (bulbasaur[key]) {
      console.log(bulbasaur)
      return <Sprite sprite={bulbasaur[key]} />
    }
  });

  return (
    <section className='sprites-container'>
      {sprites}
    </section>
  );
}

export default SpritesContainer;