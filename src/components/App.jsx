import React, { Component } from 'react';
import Header from './Header';
import ContestList from './ContestList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: 'Naming Contests',
      contests: this.props.initialContests
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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <Header message={this.state.pageHeader} />
            <ContestList contests={this.state.contests} />
          </div>
        </div>
      </div>
    );
  }
}
