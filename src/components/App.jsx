import React, { Component } from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';
import PropTypes from 'prop-types';

function pushState(obj, url) {
  return window.history.pushState(obj, '', url);
}

const onPopState = popStateHandler => {
  window.onpopstate = popStateHandler;
};

export default class App extends Component {
  static propTypes = {
    initialData: React.PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = this.props.initialData;
    this.fetchContest = this.fetchContest.bind(this);
  }

  componentDidMount() {
    // This is the life cycle method that guarantees that the DOM has been mounted in the browser successfully.
    console.log('did Mount'); // ajax call, timers, listeners

    onPopState(event => {
      this.setState({
        currentContestId: (event.state || {}).currentContestId
      });
    });
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

  fetchContestList = () => {
    pushState({ currentContestId: null }, '/');
    api.fetchContestList().then(contests => {
      this.setState({
        currentContestId: null,
        contests
      });
    });
  };

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
      return (
        <Contest
          contestListClick={this.fetchContestList}
          {...this.currentContest()}
        />
      );
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
