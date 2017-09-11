import React, { Component } from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

function pushState(obj, url) {
  return window.history.pushState(obj, '', url);
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialData;
    this.fetchContest = this.fetchContest.bind(this);
    this.propTypes = {
      initialData: React.PropTypes.object.isRequired
    };
  }

  componentDidMount() {
    // This is the life cycle method that guarantees that the DOM has been mounted in the browser successfully.
    console.log('did Mount'); // ajax call, timers, listeners
  }

  componentWillUnmount() {
    //This is the life cycle method that says the component is about to be unmounted.
    console.log('will unmount'); //clear timers, listeners
  }

  fetchContest(contestId) {
    pushState({ currentContestId: contestId }, `/contest/${contestId}`);
    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
  }

  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    }

    return 'Naming Contests';
  }

  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }

  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.currentContest()} />;
    }
    return (
      <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests}
      />
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <Header message={this.pageHeader()} />
            {this.currentContent()}
          </div>
        </div>
      </div>
    );
  }
}
