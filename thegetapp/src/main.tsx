//Main
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import RouterWrapper from './RouterWrapper.jsx';

import './index.css'
import { AuthProvider } from './components/AuthContext.js';
import { init, backButton } from '@telegram-apps/sdk-react';
import { closingBehavior, swipeBehavior, viewport } from '@telegram-apps/sdk';





async function initTg() {
        init();

      backButton.mount();

    if (closingBehavior.mount.isAvailable()) {
      closingBehavior.mount();
    }

    if (swipeBehavior.mount.isAvailable()) {
      swipeBehavior.mount();
    }

        if (viewport.mount.isAvailable()) {
          await viewport.mount();
          viewport.expand();
        }

        if (viewport.requestFullscreen.isAvailable()) {
          await viewport.requestFullscreen();
        }
      }
    if(import.meta.env.MODE === "development"){
      initTg();
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

