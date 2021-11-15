import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Footer from './footer';
import MetaData from './metaData';
import '../../styles/styles.scss';

interface Props {
  // any props that come into the component, you don't have to explicitly define children.
  children: unknown,
}

const Layout: FC<Props> = ({ children }) => {
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