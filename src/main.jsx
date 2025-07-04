import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import { DarkModeProvider } from './Components/DarkModeContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkModeProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </DarkModeProvider>,

  
    
     
    
 

);
