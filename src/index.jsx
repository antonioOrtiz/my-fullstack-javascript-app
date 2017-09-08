import React from 'react';
import { render } from 'react-dom';

import data from './testData.json';
import App from './components/App';

render(<App contests={data.contests} />, document.getElementById('root'));
