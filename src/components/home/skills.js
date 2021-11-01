import React from 'react';
import { InView } from 'react-intersection-observer';
import DbIcon from '../../images/icons8-server-64.png';
import ServerIcon from '../../images/icons8-server-60.png';
import UIIcon from '../../images/icons8-web-development-64.png';

const Skills = () => {
  return (
    <section id="skills">
      <InView triggerOnce={true}>
        {({ inView, ref, /* entry */ }) => (
          <div className={inView ? 'content-container fade-in show' : 'content-container fade-in'} ref={ref}>

            <div className="skills-column">
              <div className="icon-container">
                <img src={DbIcon} alt="database-icon" />
              </div>
              <div className="skills-header">
                <h1>Database</h1>
                <p>
                    Developing, maintaining and debugging SQL databases using Stored Procedures and ORMs.
                </p>
              </div>
              <h2>Dialects</h2>
              <ul>
                <li>SQL Server</li>
                <li>Postgres</li>
                <li>MySQL</li>
                <li>MariaDB</li>
              </ul>
            </div>

            <div className="skills-column">
              <div className="icon-container">
                <img src={ServerIcon} alt="server-side-icon" />
              </div>
              <div className="skills-header">
                <h1>Server-side</h1>
                <p>
                  Building and maintaining .NET Core web applications in C# to developing GraphQL APIs using Javascript.
                </p>
              </div>
              <h2>Server-side Tech</h2>
              <ul>
                <li>C# .Net Core/Framework</li>
                <li>Nodejs</li>
                <li>Php</li>
                <li>GraphQL</li>
                <li>Docker</li>
              </ul>
            </div>

            <div className="skills-column">
              <div className="icon-container">
                <img src={UIIcon} alt="front-end-icon" />
              </div>
              <div className="skills-header">
                <h1>UI / UX</h1>
                <p>
                    Producing and maintaining web based applications for clientele using Nodejs with react.
                </p>
              </div>
              <h2>Front-end frameworks</h2>
              <ul>
                <li>React</li>
                <li>Sass</li>
                <li>Less</li>
                <li>JQuery</li>
                <li>Razor</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>

          </div>
        )}
      </InView>
    </section>
  );
};

export default Skills;