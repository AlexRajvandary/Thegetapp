//Main
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import RouterWrapper from './RouterWrapper.jsx';

import './index.css'
import { AuthProvider } from './components/AuthContext.js';
import { init, miniApp } from '@telegram-apps/sdk';

const initializeTelegramSDK = async () => {
  try {
    await init();


    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
      console.log('Mini App готово');
    }


  } catch (error) {
    console.error('Ошибка инициализации:', error);
  }
};


initializeTelegramSDK();

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <AuthProvider>
       <BrowserRouter>
      <RouterWrapper />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)

