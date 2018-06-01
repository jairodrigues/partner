import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Partners from './List';
import FormPartners from './Form';

export default class PartnersRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/partners" component={Partners} />
        <Route exact path="/partners/form" component={FormPartners} />
      </Switch>
    );
  }
}
