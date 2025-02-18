import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PasswordGenerator from './Pass.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PasswordGenerator /> */}
    <App />
  </StrictMode>,
)
