import React from 'react';
import PropTypes from 'prop-types';

const Breadcrums = props => (
  <nav>
    <div class="nav-wrapper">
      <div class="col s12">
        <a href={props.src} class="breadcrumb">
          {props.children}
          <a href="#!" class="breadcrumb">
            First
          </a>
          <a href="#!" class="breadcrumb">
            Second
          </a>
          <a href="#!" class="breadcrumb">
            Third
          </a>
        </a>
      </div>
    </div>
  </nav>
);

Breadcrums.propTypes = {
  children: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default Breadcrums;
