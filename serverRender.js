//fetch the data from the api
import React from 'react';
import ReactDomServer from 'react-dom/server';

import App from './src/components/App';

var axios = require('axios');
import config from './config';

const getApiUrl = contestId => {
  if (contestId) {
    return `http://localhost:8016/api/contests/${contestId}`;
  }
  return `http://localhost:8016/api/contests`;
};

const getInitialData = (contestId, apiData) => {
  if (contestId) {
    return {
      currentContestId: apiData._id,
      contests: {
        [apiData._id]: apiData
      }
    };
  }
  return {
    contests: apiData.contests
  };
};

const serverRender = contestId =>
  axios
    .get(getApiUrl(contestId))
    .then(resp => {
      const initialData = getInitialData(contestId, resp.data);
      return {
        initialMarkup: ReactDomServer.renderToString(
          <App initialData={initialData} />
        ),
        initialData: initialData
      };
    })
    .catch(console.error);

export default serverRender;
