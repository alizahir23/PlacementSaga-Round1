import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header'
import App from './App';

// THE FOLLOWING CHANGES ARE BEING MADE IN ORDER TO PARTICIPATE IN HACKTOBERFEST

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


