import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Cart from './Cart.jsx'
import { CartIcon } from './components/CartIcon.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <header>
          <Link to="/">
            <h1>Shopping Cart</h1>
          </Link>
          <Link to="cart">
            <CartIcon />
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
