import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Footer from './footer';
import MetaData from './metaData';
import '../../styles/styles.scss';

const Layout = ({ children }) => {
  return (
    <>
      <MetaData />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;