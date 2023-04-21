import React, { useEffect, useState } from 'react';
import './PokemonContainer.css';
import fetchPokemon from '../../utils/apiCalls';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Pokemon from '../Pokemon/Pokemon';

// Temp placeholders for styling
import { frontSprites } from '../../assets/mock-sprites';

const PokemonContainer = ({ searchTerm }) => {
  const [pokeList, setPokeList] = useState([]);
  const [pokemon, setPokemon] = useState([])
  const [noMatchMessage, setNoMatchMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setError('');
    fetchPokemon()
    .then(data => {
      setPokeList([...data.results]);
    })
    .catch(error => {
      setError(error);
    })
  }, []);

  useEffect(() => {
    const pokemon = pokeList.length > 0 && pokeList.map((pokemon, i) => {
      return (
        <Pokemon key={i} dexNum={i + 1} name={pokemon.name} />
      )
    });

    setPokemon(pokemon);
  }, [pokeList]);

  useEffect(() => {
    let foundPokemon;
    let pokemonIndex;

    setNoMatchMessage('')
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
  }, [searchTerm]);

  return (
    error ? <ErrorMessage /> :
    (
      <>
        {noMatchMessage !== '' && <p className='no-match'>{noMatchMessage}</p>}
        <section className='pokemon-container'>
          {pokemon}
        </section>
      </>
    )
  );
}

export default PokemonContainer;