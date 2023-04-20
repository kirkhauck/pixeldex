import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [pokemonName, setPokemonName] = useState('')

  return (
    <form>
      <input
        type='text'
        name='pokemonName'
        value={pokemonName}
        onChange={event => setPokemonName(event.target.value)}
      />
      <button className='search-button'>SEARCH</button>
    </form>
  );
}

export default SearchBar;