import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import './normalize.css';
import { AppVestido } from './AppVestido.jsx'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <AppVestido />
    </BrowserRouter>
    
  
)
