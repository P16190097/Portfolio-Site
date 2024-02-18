import * as React from 'react';
import SEO from '../components/shared/metaData';
import Layout from '../components/shared/layout';
import HeroBanner from '../components/home/heroBanner';
import AboutMe from '../components/home/aboutMe';
import Associates from '../components/home/associates';
import Skills from '../components/home/skills';
import Projects from '../components/home/projects';
import Socials from '../components/home/socials';

// styles
const pageStyles = {
  color: '#232129',
  fontFamily: 'Poppins, Roboto, Neue Helvetica, sans-serif, serif',
};

export const Head = () => (
  <>
    <title>Josh Mayo - Web developer | joshmayo.co.uk</title>
    <SEO />
  </>
);

// markup
const IndexPage = () => {
  return (
    <div className='parallax'>
      <Layout>
        <main style={pageStyles}>
          <HeroBanner />
          <AboutMe />
          <Associates />
          <Skills />
          <Projects />
          <Socials />
        </main>
        <div className='parallax__layer parallax__layer--back2'>
          <div id='stars3'></div>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
