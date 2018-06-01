import React from 'react';
import PropTypes from 'prop-types';

const Sidenav = props => (
  <ul id="slide-out" class="side-nav fixed">
    <li>
      <div class="user-view">
        <div class="background">
          <img src={props.img} alt="img-user" />
        </div>
        <a href="#!name">
          <span class="white-text name">{props.name}</span>
        </a>
        <a href="#!email">
          <span class="white-text email">{props.email}</span>
        </a>
      </div>
    </li>
    <li>
      <a class="subheader">Menu</a>
    </li>
    <li>
      <a href="#!">
        <i class="material-icons">contacts</i>Parceiros
      </a>
    </li>
  </ul>
);

Sidenav.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

Sidenav.defaultProps = {};

export default Sidenav;
