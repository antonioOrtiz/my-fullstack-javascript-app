import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContestPreview extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props._id);
  }

  render() {
    return (
      <div className="link ContestPreview" onClick={this.handleClick}>
        <div className="category-name ">{this.props.categoryName}</div>
        <div className="contest-name">{this.props.contestName}</div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  _id: React.PropTypes.string.isRequired,
  categoryName: React.PropTypes.string.isRequired,
  contestName: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};
