import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar, Sidenav } from '../components';

import PartnersRouter from '../pages/partners';
import user from '../assets/img/user-img.jpg';

export default class Router extends Component {
  render() {
    return (
      <Fragment>
        <Navbar logo={'WhiteLabelFabric'} color={'blue'} icon={'exit_to_app'} />
        <Sidenav
          img={user}
          name={'Jairo'}
          email={'jgoncalves@acessocard.com'}
        />
        <Switch>
          <Route path="/partners" component={PartnersRouter} />
        </Switch>
      </Fragment>
    );
  }
}
