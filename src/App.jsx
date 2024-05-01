import { useState, useContext, useEffect } from 'react'
import { CartContext } from './Context/CartContext'
import './App.css'

function App() {
  const [productList, setProductList] = useState([])

  const { addToCart } = useContext(CartContext)

  console.log(productList)

  const URL_API = 'https://fakestoreapi.com/products'

  const connectToApi = async () => {
    try {
      const res = await fetch(URL_API)
      const data = await res.json()
      setProductList(data)
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    connectToApi()
  }, [])

  return (
    <>
      <div className="product-list">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <div className="container-img">
              <img src={product.image} alt={product.title} />
            </div>

            <h3 className="h-100">{product.title}</h3>
            <p className="price">${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
