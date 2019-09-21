import React from 'react';

// FIXME: Remove this
import { Button } from 'antd'

import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';

import Calendar from './views/Calendar';
import Map from './views/Map';

const Router = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Button>Home</Button>} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/map" component={Map} />
      </Switch>
  </BrowserRouter>
);

export default Router;
