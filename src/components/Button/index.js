import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, icon, src, name }) => (
  // <Link to={{ pathname: src }}>
  //   <button type="submit" className={color}>
  //     <i className="material-icons left">{icon}</i>
  //   </button>
  //   {name}
  // </Link>
  <button type="submit" className={color}>
    <i className="material-icons left">{icon}</i>
  </button>
);

Button.prototype = {
  icon: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  src: PropTypes.string,
};

export default Button;
