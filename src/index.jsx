import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import data from './testData.json';
import App from './components/App';

axios
  .get('/api/contests')
  .then(resp => {
    render(
      <App initialContests={window.initialData.contests} />,
      document.getElementById('root')
    );
  })
  .catch(console.error);
