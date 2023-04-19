import React from 'react';
import './HomeView.css';
import SearchBar from '../SearchBar/SearchBar';
import PokemonContainer from '../PokemonContainer/PokemonContainer';

const HomeView = () => {
  return (
    <main>
      <SearchBar />
      <PokemonContainer />
    </main>
  );
}

export default HomeView;