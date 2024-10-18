import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeBtn from './Components/ThemeBtn/ThemeBtn.jsx'

createRoot(document.getElementById('root')).render(
  
    <App />
    // <ThemeBtn/>
  
)
