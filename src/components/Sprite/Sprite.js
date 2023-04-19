import React from 'react';
import './Sprite.css';

const Sprite = ({ sprite }) => {
  return (
    <div className='sprite'>
      <img src={sprite} />
    </div>
  );
}

export default Sprite;