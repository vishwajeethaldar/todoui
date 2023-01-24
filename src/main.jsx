import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import './style/global.css';
import AuthContext from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <AuthContext> 
         <App />
      </AuthContext>
    </BrowserRouter>
  
)
