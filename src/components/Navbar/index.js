import React from 'react';
import PropTypes from 'prop-types';

const Navbar = props => (
  <div className="main">
    <nav className={props.color}>
      <div className="nav-wrapper">
        <a className="brand-logo center">{props.logo}</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a>
              <i className="material-icons">{props.icon}</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

Navbar.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string,
  logo: PropTypes.string,
};

export default Navbar;
