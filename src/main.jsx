import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Essential for Tailwind styles to load

/**
 * BharatChain Entry Point
 * * Note: If you receive a "module not found" error on Netlify,
 * double-check that 'App.jsx' and 'index.css' match the 
 * case-sensitivity of your actual filenames.
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);