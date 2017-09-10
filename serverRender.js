//fetch the data from the api
import React from 'react';
import ReactDomServer from 'react-dom/server';

import App from './src/components/App';

var axios = require('axios');
import config from './config';

const serverRender = () =>
  axios
    .get('http://localhost:8016/api/contests')
    .then(resp => {
      return {
        initialMarkup: ReactDomServer.renderToString(
          <App initialContests={resp.data.contests} />
        ),
        initialData: resp.data
      };
    })
    .catch(console.error);

export default serverRender;
