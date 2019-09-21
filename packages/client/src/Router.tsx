import React from 'react';

import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';

import Map from './views/Map';
import Home from './views/Home'
import ActivityPage from './views/AcivityPage'

const Router = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/map" component={Map} />
        <Route path="/activity/:id" component={ActivityPage} />
      </Switch>
  </BrowserRouter>
);

export default Router;
