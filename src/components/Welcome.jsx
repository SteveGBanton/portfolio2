import React from 'react';
import Scroll from 'react-scroll';

const Link = Scroll.Link;

const Welcome = () => (
  <div>
    <div id="welcome-header" className="shadow2">

      <div id="welcome-menu" className="app-padding">
        <div id="welcome-logo">
          <img
            alt="logo"
            src="./images/logo-b.png"
            style={{ width: 30, height: 30, opacity: 0.8 }}
          />
        </div>
        <div id="welcome-menu-items">
          <Link
            style={{
              display: 'flex',
              alignItems: 'center',
              height: 30,
              cursor: 'pointer',
              padding: 0,
              margin: 10,
            }}
            className="nav-link"
            to="portfolio"
            spy
            smooth
            offset={-100}
            duration={500}
          >
            Portfolio
          </Link>
          <Link
            style={{
              display: 'flex',
              alignItems: 'center',
              height: 30,
              cursor: 'pointer',
              padding: 0,
              margin: 10,
            }}
            className="nav-link"
            to="contact"
            spy
            smooth
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </div>

      <div id="welcome-welcome" className="app-padding">
        <h1>Hi, I'm Steve.
          <br />
          {"I'm a Full Stack Engineer"}
          <br />
          working at <a id="no-underline" target="_blank" rel="noopener noreferrer" href="https://www.remine.com">Remine</a>
          <span className="blink">_</span>
        </h1>
      </div>

    </div>


  </div>
);

export default Welcome;
