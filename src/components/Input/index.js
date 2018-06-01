import React from 'react';
import PropTypes from 'prop-types';

const Input = props => (
  <div class="input-field col s12">
    <i class="material-icons prefix">account_circle</i>
    <input id="icon_prefix" type="text" class="validate" />
    <label for="icon_prefix">{props.label}</label>
  </div>
);

Input.prototype = {
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
