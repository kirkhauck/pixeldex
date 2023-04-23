import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import pokeballLogo from '../../assets/pokeball-logo.png';
import titleLogo from '../../assets/title-logo.png';

const Header = () => {
  return (
    <header>
      <div className='logo-container'>
        <div className='title-container'>
          <Link to='/' className='home-button-link'>
            <img className='title-logo' src={titleLogo} alt='pixeldex title logo' />
          </Link>
          <p className='subtitle'>Catch 'em all! One pixel at a time.</p>
        </div>
        <img className='pokeball-logo' src={pokeballLogo} alt='pixelated pokeball logo' />
      </div>
      <Link to='/' className='home-button-link'>
        <button className='home-button'>HOME</button>
      </Link>
    </header>
  );
}

export default Header;