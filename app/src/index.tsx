import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import StyledGlobal from './globalStyles';
import { IconContext } from 'react-icons/lib';
import { SnackBarProvider } from 'contexts/snackContext';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledGlobal />
      <IconContext.Provider value={{ className: 'icons' }}>
        <SnackBarProvider>
          <App />
        </SnackBarProvider>
      </IconContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
