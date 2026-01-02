import React from 'react'
import ProductCard from '../componets/Products/Producrcard.jsx'

const Home = ({ product }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Todo List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.map(item => (
            <ProductCard key={item.id} todo={item} />
          ))}
        </div>
      </div>
  )
}

export default Home