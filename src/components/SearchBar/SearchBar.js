import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ addSearchTerm }) => {
  const [pokemonName, setPokemonName] = useState('');

  const handleClick = event => {
    event.preventDefault();
    addSearchTerm(pokemonName);
  }

  return (
    <form>
      <input
        type='text'
        name='pokemonName'
        value={pokemonName}
        onChange={event => setPokemonName(event.target.value)}
      />
      <button
        name='search button'
        className='search-button'
        onClick={event => handleClick(event)}
      >
        SEARCH
      </button>
    </form>
  );
}

export default SearchBar;