import React, { useEffect, useState } from 'react';
import favicon from '../../images/favicon/favicon.ico';
// import thumbnail from '../../images/favicon/android-chrome-192x192.png';

const SEO = () => {
  const [url, setUrl] = useState<Location | null>(null);

  useEffect(() => {
    return setUrl(window.location);
  }, []);

  return (
    <>
      <meta name="og:description" content="I'm a graduate web developer based in Oxfordshire, England. I have a 
            background in web based software development for the social care sector and have a passion for UI development and design 
            currently using Nodejs with React, GraphQL and Postgres." />
      <meta name="og:image" content={`${url}images/thumbnail.png`} /> 
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
    </>
  );
};

export default SEO;