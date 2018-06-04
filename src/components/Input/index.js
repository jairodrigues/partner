import React from 'react';
import PropTypes from 'prop-types';

const Input = props => (
  <div className="input-field col s12">
    <i className="material-icons prefix">account_circle</i>
    <input
      id="icon_prefix"
      name={props.name}
      type="text"
      className="validate"
      onChange={props.onChange}
      value={props.value}
    />
    <label htmlFor="icon_prefix">{props.label}</label>
  </div>
);

Input.prototype = {
  icon: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.func,
};

export default Input;
