import React from 'react';
import ReactDOM from 'react-dom';
import Router from '../src/routes';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// CSS MATERIALIZE
import './assets/css/materialize.css';

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
