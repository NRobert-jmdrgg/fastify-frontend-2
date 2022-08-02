import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { CssBaseline } from '@mui/material';
import { SearchProvider } from './contexts/search.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SearchProvider>
      <CssBaseline />
      <App />
    </SearchProvider>
  </React.StrictMode>
);
