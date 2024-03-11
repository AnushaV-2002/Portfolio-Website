import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../css/scrolltotopbutton.css'; 

const ScrollToTopButton = ({ backgroundColor, color }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={scrollToTop} className="scroll-to-top-button" style={{ backgroundColor, color }}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;