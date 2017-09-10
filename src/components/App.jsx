import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: 'Naming Contests',
      contests: []
    };
  }

  componentDidMount() {
    // This is the life cycle method that guarantees that the DOM has been mounted in the browser successfully.
    console.log('did Mount'); // ajax call, timers, listeners
    axios // returns a promise
      .get('/api/contests')
      .then(resp => {
        this.setState({ contests: resp.data.contests });
      })
      .catch(console.error);
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
            <div>
              {this.state.contests.map(contest => (
                <ContestPreview key={contest.id} {...contest} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
