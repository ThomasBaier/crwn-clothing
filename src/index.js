import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Gives application routing functionality 
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

//<!---React.StrictMode--->
 