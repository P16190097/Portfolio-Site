import React from 'react';
import { /* Hexagon, */ TiledHexagons } from 'tiled-hexagons';
import { Arch, Electron, Graphql, Mongodb, Nodejs, React as ReactLogo, Reactivex, Redux, Sass } from '../../images/logos';

const Skills = () => {
  const icons = [Nodejs, ReactLogo, Redux, Reactivex, Sass, Electron, Graphql, Mongodb, Arch];

  return (
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
  );
};

export default Skills;