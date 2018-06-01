import React from 'react';
import PropTypes from 'prop-types';

const Breadcrums = props => (
  <nav className={props.color}>
    <div className="nav-wrapper">
      <div className="col s12">
        <div className="breadcrumb">
          <a href={props.src} className="breadcrumb">
            {props.last}
          </a>
          <a className="breadcrumb">{props.current}</a>
        </div>
      </div>
    </div>
  </nav>
);

Breadcrums.propTypes = {
  src: PropTypes.string,
  color: PropTypes.string,
  last: PropTypes.string,
  current: PropTypes.string,
};

export default Breadcrums;
