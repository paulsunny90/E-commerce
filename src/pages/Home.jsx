import React from 'react'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Todo List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.map(item => (
            <ProductCard key={product.id} todo={product} />
          ))}
        </div>
      </div>
  )
}

export default Home