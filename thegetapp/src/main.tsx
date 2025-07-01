//Main
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import RouterWrapper from './RouterWrapper.jsx';

import './index.css'
import { AuthProvider } from './components/AuthContext.js';
import { init, backButton } from '@telegram-apps/sdk-react';
import { closingBehavior, swipeBehavior } from '@telegram-apps/sdk';



// Initialize the package telegram-apps.
init();

backButton.mount();

if (closingBehavior.mount.isAvailable()) {
  closingBehavior.mount();
}

if (swipeBehavior.mount.isAvailable()) {
  swipeBehavior.mount();
}

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <AuthProvider>
       <BrowserRouter>
      <RouterWrapper />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)

