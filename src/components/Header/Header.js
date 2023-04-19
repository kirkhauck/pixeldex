import React from 'react';
import './Header.css';
import pokeballLogo from '../../assets/pokeball.png'

const Header = () => {
  return (
    <header>
      <div className='logo-container'>
        <h1 className='main-logo'>PixelDex</h1>
        <img className='pokeball-logo' src={pokeballLogo} alt='pixelated pokeball logo' />
      </div>
    </header>
  );
};

export default Header;