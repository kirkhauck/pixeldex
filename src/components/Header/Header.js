import React from 'react';
import './Header.css';
import pokeballLogo from '../../assets/pokeball.png'

const Header = () => {
  return (
    <header>
        <h1 className='main-logo'>PixelDex</h1>
        <img className='pokeball-logo' src={pokeballLogo} alt='pixelated pokeball logo' />
    </header>
  );
};

export default Header;