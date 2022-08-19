import React from 'react';
import { Helmet } from 'react-helmet';
import { createRoot } from 'react-dom/client';
import RouteController from './routes/RouteController.jsx';
import { AuthProvider } from './context/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = createRoot(document.getElementById('root'));

import './index.css';
// <React.StrictMode>
root.render(
  <>
    <Helmet defaultTitle='Code Buddy' titleTemplate='%s | Code Buddy'>
      <meta charSet='utf-8' />
      <html lang='id' amp />
    </Helmet>
    <ToastContainer
      position='bottom-right'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <AuthProvider>
      <RouteController />
    </AuthProvider>
  </>
);
