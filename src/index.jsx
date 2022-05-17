// using this import style does not work
import React from 'react';

// // but using this import style does...
// import {
//   default as React,
// } from 'react';

import {
  createRoot,
} from 'react-dom/client';

import {
  default as App,
} from './app';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
