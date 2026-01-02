
import axios from 'axios'
import Header from './componets/Heder/Heder.jsx'
import Footer from './componets/footer/footer.jsx'
import ProductCard from './componets/Products/Producrcard.jsx'
import Home from './pages/Home.jsx'
import {useEffect,useState} from 'react'

function App() {
 const[product,setProduct] =useState([])
 useEffect(()=>{
  fechdata()
 }, [])
 const fechdata = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/todos')
    setProduct(response.data.todos)
  } catch (err) {
    console.log(err)
  }
 };
  return (
     <div>
      <Header />
      <Home product={product} />
      <Footer />
    </div>
  )
}

export default App