import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StoreProvider } from 'easy-peasy';
import './index.css'
import Store from './Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <StoreProvider store={Store}>
    <App />
    </StoreProvider>
  </React.StrictMode>,
)
