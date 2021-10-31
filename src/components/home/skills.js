import React from 'react';
import DbIcon from '../../images/icons8-server-64.png';
import ServerIcon from '../../images/icons8-server-60.png';
import UIIcon from '../../images/icons8-web-development-64.png';

const Skills = () => {
  return (
    <section id="skills">
      <div className="content-container">

        <div className="skills-column">
          <div className="icon-container">
            <img src={DbIcon} alt="database-icon" />
          </div>
          
          <h1>Database</h1>
          <p>
            Developing and maintaining SQL Queries, Stored Procedures and Relational Databases in SQL.
          </p>
          <h2>Dialects</h2>
          <p>SQL Server</p>
          <p>Postgres</p>
          <p>MySQL</p>
          <p>MariaDB</p>
        </div>

        <div className="skills-column">
          <div className="icon-container">
            <img src={ServerIcon} alt="server-side-icon" />
          </div>
          <h1>Server-side</h1>
          <p>
            Building and maintaining .NET Core APIs in C# to producing software applications in Java.
          </p>
          <h2>Server-side tech</h2>
          <ul>
            <li>C#</li>
            <li>NodeJs</li>
            <li>Php</li>
            <li>GraphQl</li>
          </ul>
        </div>

        <div className="skills-column">
          <div className="icon-container">
            <img src={UIIcon} alt="front-end-icon" />
          </div>
          <h1>UI / UX</h1>
          <p>
            Producing and maintaining web based applications for clients in Angular and JavaScript Node.
          </p>
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
    </section>
  );
};

export default Skills;