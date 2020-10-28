import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import importAll from './utils/importAll';

import './index.scss';

importAll(require.context('./', true, /img\/(.*)\.(png|jpg|svg)$/)); // import all images

ReactDOM.render(<App />, document.querySelector('#root'));
