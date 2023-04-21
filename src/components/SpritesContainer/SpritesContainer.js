import React, { useEffect, useState } from 'react';
import './SpritesContainer.css';
import fetchPokemon from '../../utils/apiCalls';
import { extractUrls } from '../../utils/helpers';
import Sprite from '../Sprite/Sprite';

const SpritesContainer = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState({});
  const [sprites, setSprites] = useState([]);

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    fetchPokemon(url)
    .then(data => {
      setPokemon(data.sprites);
    })
  }, [])

  useEffect(() => {
    if (Object.keys(pokemon).length) {
      const urls = extractUrls(pokemon);
      const spriteComponents = urls.map((url, i) => {
        return <Sprite key={i} sprite={url} />
      });
      setSprites(spriteComponents);
    }
  }, [pokemon]);

  return (
    <section className='sprites-container'>
      {sprites}
    </section>
  );
}

export default SpritesContainer;