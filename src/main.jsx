import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductContextProvider from './componets/Context/Context.jsx'
import cartProvider from './componets/Context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
 
    <ProductContextProvider>
      <cartProvider>

      <App />
      </cartProvider>
    </ProductContextProvider>
  
)
