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
<<<<<<< HEAD
        I’m a developer from Toronto. I like to create business-centered applications using <a href="http://meteor.com" target="new"><span className="bold-font hover-yellow">Meteor <span className="material-icons">open_in_new</span></span></a> & <a href="http://reactjs.org" target="new"><span className="bold-font hover-yellow">React <span className="material-icons">open_in_new</span></span></a>. I'm also a big fan of <a href="http://material.io" target="new"><span className="bold-font hover-yellow">Material Design <span className="material-icons">open_in_new</span></span></a>.
=======
        I’m a developer from Toronto. I like to create business-centered applications using <a href="http://meteor.com" target="new"><span className="bold-font hover-yellow">Meteor <span className="material-icons">open_in_new</span></span></a> & <a href="http://reactjs.org" target="new"><span className="bold-font hover-yellow">React <span className="material-icons">open_in_new</span></span></a>. I'm also a big fan of
        <a href="http://material.io" target="new"><span className="bold-font hover-yellow"> Material Design <span className="material-icons">open_in_new</span></span></a>.
>>>>>>> caac72b1d3219f10f4ee3d8ebc9a4084f5423bff
      </div>
    </div>
  </div>
);

export default Me;
