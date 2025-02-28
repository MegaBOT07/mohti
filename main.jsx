import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // or 'App1' if that's your starting page

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Or App1 if it's your main starting component */}
  </React.StrictMode>
);
