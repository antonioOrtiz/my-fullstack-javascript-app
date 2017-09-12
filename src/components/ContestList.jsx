import React from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {Object.keys(contests).map(contestId => (
      <ContestPreview
        key={contestId}
        onClick={onContestClick}
        {...contests[contestId]}
      />
    ))}
  </div>
);
ContestList.defaultProps = { contests: {} };

ContestList.propTypes = {
  contests: React.PropTypes.object,
  onContestClick: React.PropTypes.func.isRequired
};

export default ContestList;
