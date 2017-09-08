import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ message }) {
  return <h2 className="center">{message}</h2>;
}

Header.propTypes = {
  message: React.PropTypes.string.isRequired
};

