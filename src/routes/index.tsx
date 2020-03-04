import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Delivery from '../pages/Delivery';
import Deliveryman from '../pages/Deliveryman';
import Recipient from '../pages/Recipient';
import Problems from '../pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/deliveries" component={Delivery} isPrivate />
      <Route path="/deliveryman" component={Deliveryman} isPrivate />
      <Route path="/recipients" component={Recipient} isPrivate />
      <Route path="/problems" component={Problems} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
