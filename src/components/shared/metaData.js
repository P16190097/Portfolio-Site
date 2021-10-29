import React from 'react';
import { Helmet } from 'react-helmet';

const MetaData = () => {
  return(
    <>
      <Helmet>
        <meta name="description" content="Placeholder description" />
      </Helmet>
      <Helmet>
        <meta name="keywords" content="web developer josh mayo" />
      </Helmet>
      <Helmet>
        <meta name="og:description" content="Placeholder description" />
      </Helmet>
    </>
  );
};

export default MetaData;