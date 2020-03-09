import React from 'react';
import { Provider } from 'react-redux';

import { Router } from 'react-router-dom';

import 'config/ReactotronConfig';

import history from 'services/history';

import GlobalStyle from 'styles/global';
import store from 'store';

import Routes from 'routes';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}
