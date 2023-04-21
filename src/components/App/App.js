import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Header from '../Header/Header';
import HomeView from '../HomeView/HomeView';
import SpriteView from '../SpriteView/SpriteView';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomeView/>} />
        <Route path='/:pokemonName' element={<SpriteView/>} />
        <Route path='*' element={<ErrorMessage/>} />
      </Routes>
    </>
  );
}

export default App;