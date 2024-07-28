import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'
import { JobProvider } from './context/JobContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JobProvider>
      <App />
    </JobProvider>

  </React.StrictMode>
);
