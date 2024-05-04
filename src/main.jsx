import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Layout/Root.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Root></Root>
    </RouterProvider>
  </React.StrictMode>
);