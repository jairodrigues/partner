import React from 'react';
import ReactDOM from 'react-dom';
import Router from '../src/routes';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store';

// CSS MATERIALIZE
import './assets/css/materialize.css';
import './assets/css/style.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
