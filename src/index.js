import './index.css';
import './vendor';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from '../../../../Library/Caches/typescript/3.0/node_modules/redux';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <Provider store={createStore(rootReducer, devToolsEnhancer())}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
