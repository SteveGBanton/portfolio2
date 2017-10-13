import React from 'react';

const Me = ({ }) => (
  <div id="me" className="app-padding">
    <div id="me-pic">
      <img
        src="./images/steve.png"
        style={{ width: 175, height: 175, borderRadius: '100%' }}
        className="shadow3"
      />
    </div>
    <div id="me-description">
        I’m a developer from Toronto. I like to create business-centered applications using Meteor & React.
    </div>
  </div>
);

export default Me;
