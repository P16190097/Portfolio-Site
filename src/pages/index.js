import * as React from 'react';
import Layout from '../components/shared/layout';
import { /* Hexagon, */ TiledHexagons } from 'tiled-hexagons';
import { Helmet } from 'react-helmet';
// import { Link } from "gatsby"
import HeroBanner from '../components/heroBanner';
import { Arch, Electron, Graphql, Mongodb, Nodejs, React as ReactLogo, Reactivex, Redux, Sass } from '../images/logos';

// styles
const pageStyles = {
  color: '#232129',
  // padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  // backgroundColor: '#000'
};

const shareURL = encodeURIComponent('https://github.com/p16190097');

const icons = [Nodejs, ReactLogo, Redux, Reactivex, Sass, Electron, Graphql, Mongodb, Arch];

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Josh Mayo - Web developer | site url here</title>
      </Helmet>
      <main style={pageStyles}>
        <HeroBanner />

        <section id="aboutMe">
          <div className="content-container">
            <h1>Hi, I&apos;m Josh. <span className="wave">👋</span></h1>
            {/* <p>
              I help designers, small agencies and businesses bring their ideas to life. Powered by Figma, VS Code and coffee, 
              I turn your requirements into CMS-ified and ecommerce-ified websites - on time and on budget.
            </p> */}
            <p>
              I&apos;m a <span className="highlight">graduate web developer</span> based in Oxfordshire, England. I have a 
              background in web based software for the social care sector and have a passion for UI development and design 
              currently using Nodejs with React, Graphql and Postgres.
            </p>
            <p>Got any questions? <a href="mailto:mayoe@live.co.uk">Contact me</a>.</p>
          </div>
        </section>

        <section>
          <div className="content-container">
            <TiledHexagons
              maxHorizontal={5}
              tileSideLengths={60}
              tileElevations={16}
              tileGap={7}
              tileBorderRadii={9}
              tiles={icons.map(icon => {
                return { img: icon };
              })}
            />
          </div>
        </section>

        <section id="socials">
          <div className="content-container">
            <div className="socials-container">
              <div className="socials-text">
                <h1>Come see what I&apos;ve been up to...</h1>
              </div>
            </div>
            <div className="socials-container">
              <TiledHexagons
                maxHorizontal={1}
                tileSideLengths={60}
                tileTextStyles={{
                  fontFamily: 'Font Awesome Brands',
                  fontSize: '58px',
                  fill: 'white'
                }}
                tileGap={0}
                tileBorderRadii={9}
                tiles={[
                  {
                    text: 'facebook-f',
                    fill: '#4267b2',
                    shadow: '#1a2947',
                    href: `https://www.facebook.com/sharer/sharer.php?u=${shareURL}}`
                  },
                  {
                    text: 'github',
                    fill: '#282828',
                    shadow: '#1a1a1a',
                    href: 'https://github.com/p16190097'
                  },
                  {
                    text: 'twitter',
                    fill: '#1dcaff',
                    shadow: '#0084b4',
                    href: `https://twitter.com/intent/tweet?url=${shareURL}}`
                  }
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
