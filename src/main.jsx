import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './Home.jsx'
// import other pages here if needed
// import About from './About.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Add more routes like this */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
)