import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App/App';
import importAll from './utils/importAll';

import './index.scss';

importAll(require.context('./', true, /img\/(.*)\.(png|jpg|svg)$/)); // import all images

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.querySelector('#root'));
