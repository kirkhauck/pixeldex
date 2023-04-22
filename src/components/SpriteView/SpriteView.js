import React from 'react';
import { useParams } from 'react-router-dom';
import './SpriteView.css';
import SpritesContainer from '../SpritesContainer/SpritesContainer';

const SpriteView = () => {
  const { pokemonName } = useParams();

  return (
    <main>
      <SpritesContainer pokemonName={pokemonName} />
    </main>
  );
}

export default SpriteView;