import { useContext } from 'react'
import { CartContext } from './Context/CartContext'

function Cart() {
  const { cartProducts, deleteToCart } = useContext(CartContext)

  return (
    <div>
      <ul>
        {cartProducts.map((product) => (
          <li key={product.id}>
            <span>{product.title}</span>
            <button onClick={() => deleteToCart(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
