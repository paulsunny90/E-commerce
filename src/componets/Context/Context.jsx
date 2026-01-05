import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import React from 'react';


export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
   const [product, setProduct] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products')
      setProducts(response.data.products)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchProduct = async ( id) => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`)
        setProduct(response.data)
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }




  useEffect(() => {

    fetchData()

  }, []);

 

  return (
    <ProductContext.Provider value={{ products,product,fetchProduct, }}>
      {children}
    </ProductContext.Provider>
  )
}
export default  ProductContextProvider;

