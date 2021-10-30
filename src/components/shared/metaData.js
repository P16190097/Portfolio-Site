import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../../images/favicon/favicon.ico';

const MetaData = () => {
  return(
    <>
      <Helmet>
        <meta name="og:description" content="Placeholder description" />
        <meta name="keywords" content="web developer josh mayo" />
        <meta name="description" content="Placeholder description" />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon} />

        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link> */}

      </Helmet>
    </>
  );
};

export default MetaData;