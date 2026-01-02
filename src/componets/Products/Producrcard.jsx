import React from 'react'

const ProductCard = ({ todo }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            Todo #{todo.id}
          </h3>
          <p className={`text-sm ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
            {todo.todo}
          </p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
          todo.completed
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {todo.completed ? 'Completed' : 'Pending'}
        </div>
      </div>
    </div>
  )
}

export default ProductCard



