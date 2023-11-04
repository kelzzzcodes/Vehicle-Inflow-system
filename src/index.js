import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import AiworkSquad from './AiworkSquad';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    < AiworkSquad />
  </React.StrictMode>
  </BrowserRouter>
);


