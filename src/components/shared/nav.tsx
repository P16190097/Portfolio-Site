import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { loaderDelay } from '@utils';
import { navLinks } from '@config';

const Nav = () => {
  const [scroll, setScroll] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const timeout = loaderDelay;

  return (
    <nav className={scroll ? 'header-visible' : ''}>
      <div className="nav-container">
        {/* <a className="nav-logo" href="/">
          <img
            alt="Gatsby G Logo"
            src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
          />
        </a> */}
        <div className='nav-inner'>
          <ul>
            <TransitionGroup component={null}>
              {isMounted &&
                    navLinks &&
                    navLinks.map(({ url, name }, i) => (
                      <CSSTransition key={i} classNames="fadedown" timeout={timeout}>
                        <li key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                          <Link to={url}>{name}</Link>
                        </li>
                      </CSSTransition>
                    ))}
            </TransitionGroup>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;