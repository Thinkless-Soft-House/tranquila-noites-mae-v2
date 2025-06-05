import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n'; // Import the i18n configuration
import { Suspense } from 'react';

// Basic loading fallback component
const Loading = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    Carregando...
  </div>
);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

