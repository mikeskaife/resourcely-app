import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header.jsx';

const App = props => (
  <div className="container-fluid">
    <Header />
    {props.children}
  </div>
);

App.propTypes = {
  'children': PropTypes.object.isRequired
};

export default App;
