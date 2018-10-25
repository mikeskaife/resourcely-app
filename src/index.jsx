import 'babel-polyfill'; // transpiles some special ES6 functions that Babel cannot
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import routes from './routes.jsx';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/* eslint-disable no-undef */
render(
  <BrowserRouter>
    <App>{routes}</App>
  </BrowserRouter>,
  document.getElementById('app')
);
/* eslint-enable no-undef */
