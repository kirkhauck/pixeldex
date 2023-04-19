import React from 'react';
import './PokemonContainer.css';
import Pokemon from '../Pokemon/Pokemon';

// Temp placeholders for styling
import { frontSprites } from '../../assets/mock-sprites';

const PokemonContainer = () => {
  const pokemonIcons = frontSprites.map(icon => <Pokemon frontSprite={icon} />)

  return (
    <section>
      {pokemonIcons}
    </section>
  );
}

export default PokemonContainer;