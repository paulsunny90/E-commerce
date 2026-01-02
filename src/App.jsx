import axios from 'axios'
import Header from './componets/Heder/Heder.jsx'
import Footer from './componets/footer/footer.jsx'
import ProductCard from './componets/Products/Producrcard.jsx'
import Home from './pages/Home.jsx'
import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products')
      setProducts(response.data.products)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const loadData = async () => {
      await fetchData()
    }
    loadData()
  }, [])

  return (
    <div>
      <Header />
      <Home products={products} />
      <Footer />
    </div>
  )
}

export default App
