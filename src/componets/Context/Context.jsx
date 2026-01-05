import axios from 'axios';
import { createContext, useEffect, useState } from 'react';


export const ProductContext = createContext();

function ProductContext({ children }) {
  const [products, setProducts] = useState([]);
  console.log(products);
  

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products')
      setProducts(response.data.products)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {

    fetchData()

  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductContext;

