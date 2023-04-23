import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './SpritesContainer.css';
import fetchPokemon from '../../utils/apiCalls';
import { extractUrls } from '../../utils/helpers';
import Sprite from '../Sprite/Sprite';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const SpritesContainer = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState({});
  const [sprites, setSprites] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    fetchPokemon(url)
    .then(data => {
      setPokemon(data.sprites);
    })
    .catch(error => setErrorMessage(error));
  }, []);

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
    errorMessage ? <ErrorMessage /> :
    (
      <section className='sprites-container'>
        <h1>{pokemonName.toUpperCase()}</h1>
        <div className='sprites-center'>
          {sprites}
        </div>
      </section>
    )
  );
}

export default SpritesContainer;

SpritesContainer.propTypes = {
  pokemonName: PropTypes.string
}