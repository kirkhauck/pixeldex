import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './PokemonContainer.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Pokemon from '../Pokemon/Pokemon';
import fetchPokemon from '../../utils/apiCalls';

const PokemonContainer = ({ searchTerm }) => {
  const [pokeList, setPokeList] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [noMatchMessage, setNoMatchMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
    fetchPokemon()
    .then(data => {
      setPokeList([...data.results]);
    })
    .catch(error => {
      setError(error);
    });
  }, []);

  useEffect(() => {
    const pokemon = pokeList.length > 0 && pokeList.map((pokemon, i) => {
      return (
        <Pokemon key={i} dexNum={i + 1} name={pokemon.name} />
      );
    });

    setPokemon(pokemon);
  }, [pokeList]);

  useEffect(() => {
    let foundPokemon;
    let pokemonIndex;

    setNoMatchMessage('');
    if (searchTerm !== '') {
      [foundPokemon, pokemonIndex] = pokeList.reduce((acc, pokemon, i) => {
        if (pokemon.name === searchTerm.toLowerCase()) {
          acc = [pokemon, i];
        }
        return acc;
      }, [null, -1]);
    }

    if (foundPokemon) {
      const pokemonName = foundPokemon.name;
      const dexNum = pokemonIndex + 1;
      const pokemon = <Pokemon dexNum={dexNum} name={pokemonName} />;

      setPokemon(pokemon);
    } else if (foundPokemon === null) {
      setNoMatchMessage(`${searchTerm.toUpperCase()} fled! No Pokemon matched your search.`)
    }
  }, [searchTerm, pokeList]);

  return (
    error ? <ErrorMessage /> :
    (
      <>
        {noMatchMessage !== '' && <p className='no-match'>{noMatchMessage}</p>}
        <section className='pokemon-container'>
          <h2>Click a Pokemon to view its pixel art!</h2>
          <div>
            {pokemon}
          </div>
        </section>
      </>
    )
  );
}

export default PokemonContainer;

PokemonContainer.propTypes = {
  searchTerm: PropTypes.string.isRequired
}