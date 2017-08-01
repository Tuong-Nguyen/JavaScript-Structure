import React from 'react';
import { connect } from 'react-redux';

import VisiableShotList from '../containers/VisiableShotList';

const App = () => (
  <div className="app">
    <VisiableShotList />
  </div>
);

export default App;