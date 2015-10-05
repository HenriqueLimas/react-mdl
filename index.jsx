require('material-design-lite/material.min.css');
require('material-design-lite/material.min.js');
require('./styles/main.css');

import React from 'react';
import Nav from './src/nav/nav.jsx';

React.render(<Nav />, document.querySelector('.rcmdl-nav'));