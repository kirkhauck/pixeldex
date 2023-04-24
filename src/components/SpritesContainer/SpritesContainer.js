import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './SpritesContainer.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Sprite from '../Sprite/Sprite';
import fetchPokemon from '../../utils/apiCalls';

const SpritesContainer = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState({});
  const [sprites, setSprites] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  
  const extractUrls = useCallback((obj) => {
    let urls = [];
  
    for (const key in obj) {
      if (key !== 'other' && typeof obj[key] === 'string') {
        urls.push(obj[key]);
      }
      
      if (key !== 'other' && typeof obj[key] === 'object') {
        urls = [...urls, ...extractUrls(obj[key])];
      }
    }
  
    return urls;
  }, []);

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    fetchPokemon(url)
    .then(data => {
      setPokemon(data.sprites);
    })
    .catch(error => setErrorMessage(error));
  }, [pokemonName]);

  useEffect(() => {
    if (Object.keys(pokemon).length) {
      const urls = extractUrls(pokemon);
      const spriteComponents = urls.map((url, i) => {
        return <Sprite key={i} id={i} sprite={url} pokemonName={pokemonName} />
      });
      setSprites(spriteComponents);
    }
  }, [pokemon, pokemonName, extractUrls]);


  return (
    errorMessage ? <ErrorMessage /> :
    (
      <section className='sprites-container'>
        {sprites}
      </section>
    )
  );
}

export default SpritesContainer;

SpritesContainer.propTypes = {
  pokemonName: PropTypes.string.isRequired
}