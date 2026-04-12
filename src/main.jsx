import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//layout
import NavBar from './components/layout/NavBar.jsx';
import Footer from './components/layout/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <NavBar/>
    <App />
  <Footer/>
  </StrictMode>,
)
