import App from './client/App';
import { BrowserRouter } from 'react-router-dom';
import theme from './client/constants/theme';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { hydrate } from 'react-dom';

hydrate(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
  () => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }
);

if (module.hot) {
  module.hot.accept();
}
