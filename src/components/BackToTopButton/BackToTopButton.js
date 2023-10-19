import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'react-feather';
import './BackToTopButton.css'; // Import your CSS file

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const threshold = 200; // Adjust the threshold to control when the button becomes visible
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(currentScrollPosition > threshold);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`back-to-top-button ${showButton ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <ArrowUp />
    </button>
  );
};

export default BackToTopButton;
