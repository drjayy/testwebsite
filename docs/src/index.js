import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Page from './Page';
import reportWebVitals from './reportWebVitals';

/* Rendering the page. */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);

reportWebVitals(console.log);
