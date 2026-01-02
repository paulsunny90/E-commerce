import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col space-y-4">
        
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">
              ${product.price}
            </span>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${product.rating >= 4.5
                ? 'bg-green-100 text-green-800'
                : product.rating >= 4.0
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
              ★ {product.rating}
            </div>
          </div>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
          Add to Cart
        </button>
        <Link to={`/products/${product.id}`}>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard



