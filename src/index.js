import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

const theme = {
  color: {
    blue: '#1749B3',
    red: '#FE0000',
    black1: '#333333',
    black2: '#171717',
    background: '#ECF3FB',
    white: '#FFFFFF',
  },
  width: {
    phone: '375px',
    tablet: '768px',
    desktop: '1440px',
  },
};
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/ChooseYourSubscription/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
