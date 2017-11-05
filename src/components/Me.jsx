import React from 'react';
import Icon from 'material-ui/Icon';

const Me = ({ }) => (
  <div id="me" className="app-padding">
    <div id="me-pic">
      <img
        alt="me"
        src="./images/steve.png"
        style={{ width: 175, height: 175, borderRadius: '100%' }}
        className="shadow3"
      />
    </div>
    <div id="me-description">
      <div>
        I’m a developer from Toronto. I like to create business-centered applications using
        <a href="http://meteor.com" target="new"> 
          <span className="bold-font hover-yellow">
            &nbsp;Meteor&nbsp;
            <span className="material-icons">
              open_in_new
            </span>
          </span>
        </a>
          &
        <a href="http://reactjs.org" target="new">
          <span className="bold-font hover-yellow">
            &nbsp;React&nbsp;
            <span className="material-icons">
              open_in_new
            </span>
          </span>
        </a>.
        I&apos;m also a big fan of&nbsp;
        <a href="http://material.io" target="new">
          <span className="bold-font hover-yellow">
            Material Design
            <span className="material-icons">
              open_in_new
            </span>
          </span>
        </a>.
      </div>
    </div>
  </div>
);

export default Me;
