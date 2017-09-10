import React from 'react';

export default function ContestPreview(contest) {
  return (
    <div className="ContestPreview">
      <div className="category-name ">{contest.categoryName}</div>
      <div className="contest-name">{contest.contestName}</div>
    </div>
  );
}
