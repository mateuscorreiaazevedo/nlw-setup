import ReactDOM from 'react-dom/client'
import { App } from '@/components/app'
import '@/assets/styles/global.css'
import React from 'react'
import '@/config/locale'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
