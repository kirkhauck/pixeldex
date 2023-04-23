import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = ({ addSearchTerm }) => {
  const [pokemonName, setPokemonName] = useState('');
  const [requiredMessage, setRequiredMessage] = useState('')

  const handleClick = event => {
    event.preventDefault();
    if (!pokemonName) {
      setRequiredMessage('Please enter a Pokemon\'s name. It\'s super effective!');
      return;
    }
    addSearchTerm(pokemonName);
  }

  const handleChange = event => {
    setPokemonName(event.target.value);
    setRequiredMessage('');
  }

  return (
    <form>
      <div>
        <input
          type='text'
          name='pokemonName'
          value={pokemonName}
          placeholder='Search by name'
          aria-required="true"
          onChange={handleChange}
          />
        <button
          name='search button'
          className='search-button'
          onClick={event => handleClick(event)}
          >
          SEARCH
        </button>
      </div>
      {requiredMessage && <p>{requiredMessage}</p>}
    </form>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  addSearchTerm: PropTypes.func.isRequired
}