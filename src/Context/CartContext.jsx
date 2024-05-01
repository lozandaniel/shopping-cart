import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([])

  const addToCart = (product) => {
    console.log(product)
    setCartProducts([...cartProducts, product])
  }

  const deleteToCart = (id) => {
    console.log(id)
    const productsFilter = cartProducts.filter((product) => product.id !== id)
    setCartProducts(productsFilter)
  }

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, deleteToCart }}>
      {children}
    </CartContext.Provider>
  )
}
