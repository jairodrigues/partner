import React from 'react';
import PropTypes from 'prop-types';

const Sidenav = props => (
  <ul id="slide-out" className="side-nav fixed">
    <li>
      <div className="user-view">
        <div className="background">
          <img src={props.img} alt="img-user" />
        </div>
        <a href="#!name">
          <span className="white-text name">{props.name}</span>
        </a>
        <a href="#!email">
          <span className="white-text email">{props.email}</span>
        </a>
      </div>
    </li>
    <li>
      <a className="subheader">Menu</a>
    </li>
    <li>
      <a href="#!">
        <i className="material-icons">contacts</i>Parceiros
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
