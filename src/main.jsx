import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LanguageProvider } from './context/LanguageContext.jsx' // <--- 1. Importamos el proveedor

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider> {/* <--- 2. Envolvemos toda la aplicación */}
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)