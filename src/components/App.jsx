import React from 'react';
import Scroll from 'react-scroll';

import Welcome from './Welcome.jsx';
import Me from './Me.jsx';
import WhatIDo from './WhatIDo.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';

const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: '',
      projects: '',
    };
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();
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
    );
  }
}
