import React from 'react';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';

const Me = ({  }) => {

  return (
    <div id="contact" className="app-padding">

      <h1>Have an interesting project?<br/>Let's talk<span className="blink">_</span></h1>
      <a href="mailto:steve.g.banton@gmail.com"><div style={{ display: 'flex', alignItems: 'center', marginRight: 3, height: 50 }}><Icon style={{ marginRight: 15, }}>email</Icon> steve.g.banton@gmail.com</div></a>

    </div>
  )
}

export default Me;
