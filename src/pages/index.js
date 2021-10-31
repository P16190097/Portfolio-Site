import * as React from 'react';
import Layout from '../components/shared/layout';
import { Helmet } from 'react-helmet';
// import { Link } from "gatsby"
import HeroBanner from '../components/heroBanner';
import AboutMe from '../components/home/aboutMe';
import Skills from '../components/home/skills';
import Projects from '../components/home/projects';
import Socials from '../components/home/socials';

// styles
const pageStyles = {
  color: '#232129',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
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
        <Projects />
        <Socials />
      </main>
    </Layout>
  );
};

export default IndexPage;
