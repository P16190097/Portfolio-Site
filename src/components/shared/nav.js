import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <nav className={scroll ? 'header-visible' : ''}>
      <div className='nav-inner'>Logo</div>
      <div className='nav-inner'>
        <a href="#portfolio">Portfolio</a>
        <a href="#socials">Socials</a>
        <a href="#contactMe">Contact Me</a>
      </div>
    </nav>
  );
};

export default Nav;