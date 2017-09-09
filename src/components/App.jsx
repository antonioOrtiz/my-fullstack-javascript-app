import React, { Component } from 'react';

import Header from './Header';
import ContestPreview from './ContestPreview';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: 'Naming Contests'
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
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.props.contests.map(contest => <ContestPreview {...contest} />)}
        </div>
      </div>
    );
  }
}
