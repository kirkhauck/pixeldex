import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <form>
      <input type='text' />
      <button className='search-button'>SEARCH</button>
    </form>
  );
}

export default SearchBar;