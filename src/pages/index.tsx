import * as React from 'react';
import { Head as SEO, Layout, HeroBanner, AboutMe, Skills, EmploymentHistory, Projects, Contact } from '@components';

// styles
const pageStyles = {
  color: '#232129',
};

export const Head = () => (
  <>
    <title>Josh Mayo - Web developer | joshmayo.dev</title>
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
          <Skills />
          <EmploymentHistory />
          <Projects />
          {/* <Socials /> */}
          <Contact />
        </main>
        <div className='parallax__layer parallax__layer--back2'>
          <div id='stars3'></div>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
