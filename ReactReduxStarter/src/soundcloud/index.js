import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';

const SoundCloud = () => {
  return (
    <Router>
      <Route exact path="/" component={Nav}/>
    </Router>
  );
};

export default SoundCloud;