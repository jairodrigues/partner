import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ color, icon, src, name }) => (
  <Link to={{ pathname: src }} className={color}>
    <i className="material-icons left">{icon}</i>
    {name}
  </Link>
);

Button.prototype = {
  icon: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  src: PropTypes.string,
};

export default Button;
