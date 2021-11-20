import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../../images/favicon/favicon.ico';

const MetaData = () => {
  return(
    <>
      <Helmet>
        <meta name="og:description" content="I'm a graduate web developer based in Oxfordshire, England. I have a 
                background in web based software development for the social care sector and have a passion for UI development and design 
                currently using Nodejs with React, GraphQL and Postgres." />
        <meta name="keywords" content="web developer, josh mayo, nodejs, react, graphql, postgres, c#, .net core, .net framework, mysql, css3, html5, javascript, typescript" />
        <meta name="description" content="I'm a graduate web developer based in Oxfordshire, England. I have a 
                background in web based software development for the social care sector and have a passion for UI development and design 
                currently using Nodejs with React, GraphQL and Postgres." />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />

        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link> */}

      </Helmet>
    </>
  );
};

export default MetaData;