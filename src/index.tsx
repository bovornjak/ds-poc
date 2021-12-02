import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { coreDefaultTheme } from '@plane-js/theme';
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@plane-js/core";

const theme = {
    ...coreDefaultTheme,
    typography: {
        body1: {
            textSize: '14px',
            weight: 'Strong',
        },
        "body-1-short": {
            textSize: '16px',
        },
    },
    font: {
        ...coreDefaultTheme.font,
        family: 'Helvetica',
    },
};

ReactDOM.render(
  <React.StrictMode>
      {/* How to replace Kite.JS theme */}
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
