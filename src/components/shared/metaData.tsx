import React from 'react';
import favicon from '../../images/favicon/favicon.ico';
import thumbnail from '../../images/thumbnail.png';

const SEO = () => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index" />
      <meta property="og:site_name" content="Joshua Mayo Web development" />
      <meta property="og:description" content="I'm a front-end web developer based in Northamptonshire, England. I have a 
                background in web based software development for the social care sector and have a passion for UI development and out of this world design 
                currently using Nodejs with React, GraphQL and Postgres." />
      <meta property="og:image" content={thumbnail} /> 
      <meta name="og:locale" content="en-GB" />
      <meta property="site_name" content="Joshua Mayo Web development" />
      <meta property="keywords" content="web developer, josh mayo, nodejs, react, graphql, gql, postgres, c#, .net core, .net framework, mysql, postgres, css3, html5, javascript, typescript" />
      <meta property="description" content="I'm a front-end web developer based in Northamptonshire, England. I have a 
                background in web based software development for the social care sector and have a passion for UI development and out of this world design 
                currently using Nodejs with React, GraphQL and Postgres." />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />

      {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest"></link> */}
    </>
  );
};

export default SEO;