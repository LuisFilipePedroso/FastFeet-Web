import React from 'react';
import usePersistedState from 'hooks/usePersistedState';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from 'styles/themes/light';
import dark from 'styles/themes/dark';

import { ThemeProvider as LocalThemeProvider } from 'context/Theme';

import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { Router } from 'react-router-dom';

import 'config/ReactotronConfig';

import history from 'services/history';

import GlobalStyle from 'styles/global';
import { store, persistor } from 'store';

import Routes from 'routes';

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <LocalThemeProvider toggleTheme={toggleTheme}>
              <Routes />
              <GlobalStyle />
              <ToastContainer autoClose={3000} />
            </LocalThemeProvider>
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}
