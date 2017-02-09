import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ErrorPage from './pages/ErrorPage';

require('font-awesome/css/font-awesome.css');
require('./less/style.less');

class Picogram extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={LoginPage} />
        <Route path='/home' component={ErrorPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/forgot' component={ErrorPage} />

        <Route path='/user' component={ErrorPage} />

      </Router>
    );
  }
}

export default Picogram;
