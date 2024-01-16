import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <link rel="manifest" href="assets/img/favicons/manifest.json"/>
        <meta name="theme-color" content="#ffffff"/>
      <App />
      </BrowserRouter>
  </React.StrictMode>
);