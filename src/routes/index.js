import React, { Component, Fragment } from 'react';
import Partners from '../pages/partners';
import { Switch, Route } from 'react-router-dom';
import { Navbar, Sidenav } from '../components';
import user from '../assets/img/user-img.jpg';

export default class Router extends Component {
  render() {
    return (
      <Fragment>
        <Navbar
          logo={'WhiteLabelFabric'}
          color={'blue lighten-2'}
          icon={'exit_to_app'}
        />
        <Sidenav
          img={user}
          name={'Jairo'}
          email={'jgoncalves@acessocard.com'}
        />
        <Switch>
          <Route path="/partners" component={Partners} />
        </Switch>
      </Fragment>
    );
  }
}
