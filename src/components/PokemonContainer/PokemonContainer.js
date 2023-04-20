import React, { useEffect, useState } from 'react';
import './PokemonContainer.css';
import fetchPokemon from '../../utils/apiCalls';
import Pokemon from '../Pokemon/Pokemon';

// Temp placeholders for styling
import { frontSprites } from '../../assets/mock-sprites';

const PokemonContainer = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokemonComponents, setPokemonComponents] = useState([])
  const [nextUrl, setNextUrl] = useState('');

  useEffect(() => {
    fetchPokemon()
    .then(data => {
      setPokeList([...data.results]);
      setNextUrl(data.next);
      return data.results;
    })
    .then(newPokemon => {
      const newPokemonComponents = newPokemon.map((pokemon, i) => {
        return (
          <Pokemon dexNum={i + 1} name={pokemon.name} />
        )
      });

      setPokemonComponents(newPokemonComponents)
    });
  }, []);

  return (
    <section className='pokemon-container'>
      {pokemonComponents}
    </section>
  );
}

export default PokemonContainer;