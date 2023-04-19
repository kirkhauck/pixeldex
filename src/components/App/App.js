import React from 'react';
import './App.css';
import Header from '../Header/Header';
import HomeView from '../HomeView/HomeView';
import SpriteView from '../SpriteView/SpriteView';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomeView/>} />
        {/* replace bublasaur with dynamic route once API data is used to render pokemon */}
        <Route path='/bulbasaur' element={<SpriteView/>} />
      </Routes>
    </>
  );
}

export default App;