import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

/* Providers Store */
import { AppContextProvider } from './components/Lib/Store/Store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App tab="home" />);

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

reportWebVitals();
