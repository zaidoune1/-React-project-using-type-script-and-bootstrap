import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import  ProviderContext  from './context/ContextProvider';
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProviderContext>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </ProviderContext>
  </React.StrictMode>,
)
