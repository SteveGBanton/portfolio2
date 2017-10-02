import React from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';

import './stylesheets/index.scss';
import defaultData from './projectData';

render(
	 <App />
,
	document.getElementById('react-container')
)
