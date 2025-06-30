//Main
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import RouterWrapper from './RouterWrapper.jsx';

import './index.css'
import { AuthProvider } from './components/AuthContext.js';

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <AuthProvider>
       <BrowserRouter>
      <RouterWrapper />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)

