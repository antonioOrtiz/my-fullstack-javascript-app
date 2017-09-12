import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contest extends Component {
  render() {
    return (
      <div className="Contest">
        <div className="contest-description">{this.props.description}</div>
        <div className="home-link link" onClick={this.props.contestListClick}>
          Content List
        </div>
      </div>
    );
  }
}

Contest.propTypes = {
  id: PropTypes.number.isRequired,
  contestListClick: PropTypes.func.isRequired
};
