//fetch the data from the api
var axios = require('axios');
import config from './config';

axios.get(`${config.serverUrl}/api/contests`).then(resp => {
  console.log(resp.data);
});
