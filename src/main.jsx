import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2 className='bg-white text-black'>Welcome to keen keeper project!</h2>
  </StrictMode>,
)
