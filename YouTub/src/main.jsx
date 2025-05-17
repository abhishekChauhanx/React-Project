import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SideProvider } from './SideContext.jsx'

createRoot(document.getElementById('root')).render(
  <SideProvider>
    <App />
  </SideProvider>,
)
