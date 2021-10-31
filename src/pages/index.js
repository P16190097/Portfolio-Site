import * as React from 'react';
import Layout from '../components/shared/layout';
import { Helmet } from 'react-helmet';
// import { Link } from "gatsby"
import HeroBanner from '../components/heroBanner';
import AboutMe from '../components/home/aboutMe';
import Skills from '../components/home/skills';
import Socials from '../components/home/socials';

// styles
const pageStyles = {
  color: '#232129',
  // padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  // backgroundColor: '#000'
};

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Josh Mayo - Web developer | site url here</title>
      </Helmet>
      <main style={pageStyles}>
        <HeroBanner />
        <AboutMe />
        <Skills />
        <Socials />
      </main>
    </Layout>
  );
};

export default IndexPage;
