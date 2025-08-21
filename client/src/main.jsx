import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Chakra UI Wrapper class

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <App />
  </StrictMode>,
)
