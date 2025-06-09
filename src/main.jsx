import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoveMessage from './components/LoveMessage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <LoveMessage/> */}
  </StrictMode>,
)
