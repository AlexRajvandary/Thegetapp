//Main
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import RouterWrapper from './RouterWrapper.jsx';

import './index.css'
import { AuthProvider } from './components/AuthContext.js';
import { init, backButton } from '@telegram-apps/sdk-react';
import { closingBehavior, swipeBehavior, requestFullscreen, popup } from '@telegram-apps/sdk';



// Initialize the package telegram-apps.
init();

backButton.mount();

if (closingBehavior.mount.isAvailable()) {
  closingBehavior.mount();
}

if (swipeBehavior.mount.isAvailable()) {
  swipeBehavior.mount();
}

async () => {

if (requestFullscreen.isAvailable()) {
  await requestFullscreen();
}

if (popup.open.isAvailable()) {
  // popup.isOpened() -> false
  const promise = popup.open({
    title: 'Hello!',
    message: 'Here is a test message.',
    buttons: [{ id: 'my-id', type: 'default', text: 'Default text' }],
  });
  // popup.isOpened() -> true
  await promise;
  // popup.isOpened() -> false
}
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

