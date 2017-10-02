import React from 'react';

const Welcome = () => {

  return (
    <div>
    <div id="welcome-header" className="shadow2">

      <div id="welcome-menu" className="app-padding">
        <div id="welcome-logo">
          <img
            src='./images/logo-b.png'
            style={{ width: 30, height: 30, opacity: 0.8}}
            >
          </img>
        </div>
        <div id="welcome-menu-items">
          <span className="nav-link"><a href="#">Portfolio</a></span>
          <span className="nav-link"><a href="#">Contact</a></span>
        </div>
      </div>

      <div id="welcome-welcome" className="app-padding">
        <h1>Hi, I'm Steve.
        <br />
        I build full-stack JavaScript
        <br />
        applications for desktop
        <br />
        and mobile
        <span className="blink">_</span>
        </h1>
      </div>

    </div>


  </div>
  )
}

export default Welcome;
