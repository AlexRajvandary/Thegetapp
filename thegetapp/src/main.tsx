//Main
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

import RouterWrapper from './RouterWrapper.jsx';

import './index.css'
import { init, backButton, closingBehavior, swipeBehavior, viewport } from '@telegram-apps/sdk-react';

function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

async function initTg() {
        init();
      const initDataRaw  = retrieveLaunchParams();
      const user = initDataRaw.tgWebAppData?.user;
      if(user){
        const avatarUrl = user.photo_url!;
        const name = user.first_name;
        const lastname = user.last_name!;
        const username = user.username!;
        localStorage.setItem("avatarUrl", avatarUrl);
        localStorage.setItem("first_name", name);
        localStorage.setItem("last_name", lastname);
        localStorage.setItem("user_name", username);
      }
    
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

        if (isMobile() && viewport.requestFullscreen.isAvailable()) {
          await viewport.requestFullscreen();
        }
      }
    if(import.meta.env.MODE === "production"){
      initTg();
    }
    


createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
       <BrowserRouter>
      <RouterWrapper />
    </BrowserRouter>
  </StrictMode>,
)

