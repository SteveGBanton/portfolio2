import React from 'react';

import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';

import Icon from 'material-ui/Icon';

const frontEnd = [
  'React.js / Redux',
  'React Native',
  'D3.js',
  'jQuery',
  'CSS/SASS/LESS',
  'Wordpress',
];

const tools = [
  'NPM',
  'Git',
  'Webpack',
  'Babel',
  'Mocha',
];

const backEnd = [
  'Meteor.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'AWS',
];

const WhatIDo = () => (
  <div id="what-i-do" className="app-padding">
    <h1>Technology I like to use<span className="blink">_</span></h1>
    <div id="techtable">
      <div className="header">
        <List
          className="shadow3"
          style={{ background: 'white' }}
          subheader={<ListSubheader>Front End</ListSubheader>}
        >
          {frontEnd.map(item => (

            <ListItem button key={item}>
              <Icon color="action">web</Icon>
              <ListItemText primary={item} />
              <ListItemSecondaryAction />
            </ListItem>
          ))}
        </List>
      </div>
      <div className="header">
        <List
          style={{ background: 'white' }}
          subheader={<ListSubheader>Back End</ListSubheader>}
          className="shadow3"
        >
          {backEnd.map(item => (

            <ListItem button key={item}>
              <Icon color="action">settings_applications</Icon>
              <ListItemText primary={item} />
              <ListItemSecondaryAction />
            </ListItem>
          ))}
        </List>
      </div>
      <div className="header">
        <List
          style={{ background: 'white' }}
          subheader={<ListSubheader>Utilities</ListSubheader>}
          className="shadow3"
        >
          {tools.map(item => (

            <ListItem button key={item}>
              <Icon color="action">build</Icon>
              <ListItemText primary={item} />
              <ListItemSecondaryAction />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  </div>
);

export default WhatIDo;
