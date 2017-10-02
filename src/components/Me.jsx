import React from 'react';
import Paper from 'material-ui/Paper';

const Me = ({  }) => {

  return (
    <div id="me" className="app-padding">
      <div id="me-pic">
        <img
          src='./images/steve.png'
          style={{ width: 175, height: 175, borderRadius: '100%', }}
          className="shadow3"
          >
        </img>
      </div>
      <div id="me-description">
        I’m a developer from Toronto. I spend most of my time developing business applications in React & Meteor.
      </div>
    </div>
  )
}

export default Me;
