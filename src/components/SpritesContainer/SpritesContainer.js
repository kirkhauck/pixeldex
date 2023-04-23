import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './SpritesContainer.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Sprite from '../Sprite/Sprite';
import fetchPokemon from '../../utils/apiCalls';

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

  const extractUrls = (obj) => {
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
  }

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
  pokemonName: PropTypes.string.isRequired
}