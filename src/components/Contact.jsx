import React from 'react';
import Icon from 'material-ui/Icon';
import Scroll from 'react-scroll';

const Element = Scroll.Element;

const Me = () => (
  <div id="contact" className="app-padding">
    <Element name="contact" className="element" />
    <h1>Have an interesting project?
      <br />
      {'Let\'s talk'}
      <span className="blink">_</span>
    </h1>
    <a href="mailto:steve.g.banton@gmail.com"><div style={{ display: 'flex', alignItems: 'center', marginRight: 3, height: 50 }}><Icon style={{ marginRight: 15 }}>email</Icon> steve.g.banton@gmail.com</div></a>
  </div>
);

export default Me;
