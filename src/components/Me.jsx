import React from 'react';
import Icon from 'material-ui/Icon';

const Me = () => (
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
        Currently located in Toronto, building applications using React, Golang and Meteor.
      </div>
    </div>
  </div>
);

export default Me;
