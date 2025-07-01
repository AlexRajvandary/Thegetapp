//Main
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import RouterWrapper from './RouterWrapper.jsx';

import './index.css'
import { AuthProvider } from './components/AuthContext.js';
import { init, backButton } from '@telegram-apps/sdk-react';
import { closingBehavior, swipeBehavior, requestFullscreen } from '@telegram-apps/sdk';



// Initialize the package telegram-apps.
init();

backButton.mount();

if (closingBehavior.mount.isAvailable()) {
  closingBehavior.mount();
}

if (swipeBehavior.mount.isAvailable()) {
  swipeBehavior.mount();
}

if (requestFullscreen.isAvailable()) {
  await requestFullscreen();
}

import { popup } from '@telegram-apps/sdk';

if (popup.open.isAvailable()) {
  // popup.isOpened() -> false
  const promise = popup.open({
    title: 'Hello!',
    message: 'Here is a test message.',
    buttons: [{ id: 'my-id', type: 'default', text: 'Default text' }],
  });
  // popup.isOpened() -> true
  const buttonId = await promise;
  // popup.isOpened() -> false
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

