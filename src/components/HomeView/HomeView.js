import React, { useState } from 'react';
import './HomeView.css';
import SearchBar from '../SearchBar/SearchBar';
import PokemonContainer from '../PokemonContainer/PokemonContainer';

const HomeView = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const addSearchTerm = term => {
    setSearchTerm(term)
  }

  return (
    <main>
      <SearchBar addSearchTerm={addSearchTerm} />
      <PokemonContainer searchTerm={searchTerm} />
    </main>
  );
}

export default HomeView;