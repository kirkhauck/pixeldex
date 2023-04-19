import React from 'react';
import './Header.css';
import pokeballLogo from '../../assets/pokeball-logo.png'
import titleLogo from '../../assets/title-logo.png'

const Header = () => {
  return (
    <header>
      <div className='logo-container'>
        <img className='title-logo' src={titleLogo} alt='pixeldex title logo' />
        <img className='pokeball-logo' src={pokeballLogo} alt='pixelated pokeball logo' />
      </div>
        <p className='subtitle'>Unleash the pixels, catch the nostalgia!</p>
    </header>
  );
};

export default Header;