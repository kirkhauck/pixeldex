import React from 'react';
import './Header.css';
import pokeballLogo from '../../assets/pokeball-logo.png'
import titleLogo from '../../assets/title-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='logo-container'>
        <div className='title-container'>
          <img className='title-logo' src={titleLogo} alt='pixeldex title logo' />
          <p className='subtitle'>Unleash the pixels, catch the nostalgia!</p>
        </div>
        <img className='pokeball-logo' src={pokeballLogo} alt='pixelated pokeball logo' />
      </div>
      <Link to='/' className='home-button-link'>
        <button className='home-button'>HOME</button>
      </Link>
    </header>
  );
};

export default Header;