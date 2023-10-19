import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Header from '../Header/Header';
import HomeView from '../HomeView/HomeView';
import SpriteView from '../SpriteView/SpriteView';
import BackToTopButton from '../BackToTopButton/BackToTopButton';
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha384-Vy538rF4lVfEFtlujUt59B0R5qKikU8oJbqn9zrNznrZ+8lEgcZqezvyT5rZP5E2s"
      crossorigin="anonymous"
    />

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomeView/>} />
        <Route path='/:pokemonName' element={<SpriteView/>} />
        <Route path='*' element={<ErrorMessage/>} />
      </Routes>
      <BackToTopButton/>
    </>
  );
}

export default App;