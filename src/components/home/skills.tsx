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
                <img src={UIIcon} alt="front-end-icon" />
              </div>
              <div className="skills-header">
                <h2>Programming languages</h2>
                <p>
                    I like to code clean designs and bring pages to life in the browser.
                </p>
              </div>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Sass</li>
                <li>C#</li>
              </ul>
            </div>

            <div className="skills-column">
              <div className="icon-container">
                <img src={ServerIcon} alt="server-side-icon" />
              </div>
              <div className="skills-header">
                <h2>Libraries & Frameworks</h2>
                <p>
                  From building and maintaining .NET web applications to developing GraphQL APIs.
                </p>
              </div>
              <ul>
                <li>React</li>
                <li>GraphQL</li>
                <li>Nextjs</li>
                <li>Gatsby</li>
                <li>ASP.Net</li>
              </ul>
            </div>

            <div className="skills-column">
              <div className="icon-container">
                <img src={DbIcon} alt="database-icon" />
              </div>
              <div className="skills-header">
                <h2>Tools & Platforms</h2>
                <p>
                    Powering innovation with effective tooling and platforms.
                </p>
              </div>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Jira</li>
                <li>Bitbucket</li>
                <li>Docker</li>
                <li>IIS</li>
              </ul>
            </div>

          </div>
        )}
      </InView>
    </section>
  );
};

export default Skills;