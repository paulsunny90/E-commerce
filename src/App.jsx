import React from 'react'
import Header from './componets/Heder/Heder.jsx'
import Footer from './componets/footer/footer.jsx'
import Home from './pages/Home.jsx'
import Details from'./componets/ProductDetails/Details.jsx'
import{ BrowserRouter,Routes,Route}from 'react-router-dom'
import ProductContextProvider from './componets/Context/Context.jsx'


function App() {

  return (
    <div>
      < ProductContextProvider>  
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products/:id' element={<Details />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </ProductContextProvider>
    </div>
  )
}

export default App

