import React from 'react';
import {render} from 'react-dom';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store.js';
import  configureBackend  from './backend.js';
configureBackend();
render(
  <Provider store={store}>
  <App />
</Provider>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unSIGNUP() to SIGNUP() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unSIGNUP();
