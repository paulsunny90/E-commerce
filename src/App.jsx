import axios from 'axios'
import Header from './componets/Heder/Heder.jsx'
import Footer from './componets/footer/footer.jsx'
import Home from './pages/Home.jsx'
import Details from'./componets/ProductDetails/Details.jsx'
import { useEffect, useState } from 'react'
import React from 'react'
import{ BrowserRouter,Routes,Route}from 'react-router-dom'

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
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='\'  element={<Home products={products} />} />
        <Route  path='\products:id' element={<Details/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
