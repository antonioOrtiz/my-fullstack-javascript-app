import React from 'react';

export default function ContestPreview({ contest }) {
  return (
    <div className="ContestPreview">
      <div>{contest.categoryName}</div>
      <div>{contest.contestName}</div>
    </div>
  );
}
