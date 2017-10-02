import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import Welcome from './Welcome.jsx';
import Me from './Me.jsx';
import WhatIDo from './WhatIDo.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';

const colors = {
  primaryDark: '#1976D2',
  primary: '#2196F3',
  primaryLight: '#BBDEFB',
  primaryText: '#FFFFFF',
  accent: '#FFC107',
  primaryText: '#212121',
  secondaryText: '#757575',
  divider: '#BDBDBD',
}

export default class App extends React.Component {

  constructor () {
    super()
    this.state = {
      tags: '',
      projects: '',
    };
  }

  componentDidMount () {
  }

 render() {
    return (
      <div id="app">


          <Welcome />
          <Me />
          <WhatIDo />
          <Portfolio />
          <Contact />

      </div>
    )
  }
}
