import React from 'react';
import { /* Hexagon, */ TiledHexagons } from 'tiled-hexagons';
import RaspberryPi from '../../images/logos/raspberry-pi-logo-svg-vector.svg';

const Footer = () => {
  return (
    <footer>
      <div>
        <TiledHexagons
          maxHorizontal={5}
          tileSideLengths={25}
          tileTextStyles={{
            fontFamily: 'Font Awesome Brands',
            fontSize: '22px',
            fill: 'white'
          }}
          tileGap={10}
          tileBorderRadii={5}
          tiles={[
            // {
            //   text: 'facebook-f',
            //   fill: '#4267b2',
            //   shadow: '#1a2947',
            //   href: 'https://www.facebook.com/'
            // },
            {
              text: 'github',
              fill: '#282828',
              shadow: '#1a1a1a',
              href: 'https://github.com/p16190097'
            },
            // {
            //   text: 'twitter',
            //   fill: '#1dcaff',
            //   shadow: '#0084b4',
            //   href: 'https://twitter.com/'
            // },
            {
              text: 'linkedin-in',
              fill: '#0a66c2',
              shadow: '#075099',
              href: 'https://www.linkedin.com/in/joshua-mayo-3949a219b/'
            }
          ]}
        />
      </div>
      <div className="pi-container">
        <div className="pi-text">Powered by Gatsby, served by Pi</div>
        <img src={RaspberryPi} alt="raspberry pi" />
      </div>
      <div>© Joshua Mayo 2024, built different 💪</div>
    </footer>
  );
};

export default Footer;