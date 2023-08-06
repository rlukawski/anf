import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { AppProviders } from './AppProviders';
import App from './App';

// see the difference in webpack-bundle-analyzer
if (process.env.NODE_ENV !== 'production') {
  // 1. eager bundle
  const axe = require('@axe-core/react') as typeof import('@axe-core/react');
  axe(React, ReactDOM, 1000, {});

  // 2. lazy bundle
  // import('@axe-core/react')
  // .then(module => module.default)
  // .then(axe => {
  //   axe(React, ReactDOM, 1000, {});
  // })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
