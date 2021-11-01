import React from 'react';
import { InView } from 'react-intersection-observer';
import { /* Hexagon, */ TiledHexagons } from 'tiled-hexagons';

const Socials = () => {
  const shareURL = encodeURIComponent('https://github.com/p16190097');

  return(
    <section id="socials">
      <InView triggerOnce={true}>
        {({ inView, ref, /* entry */ }) => (
          <div className={inView ? 'content-container fade-in show' : 'content-container fade-in'} ref={ref}>
            <div className="socials-container">
              <div className="socials-text">
                <h1>Come see what else I&apos;ve been up to...</h1>
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
        )}
      </InView>
    </section>
  );
};

export default Socials;