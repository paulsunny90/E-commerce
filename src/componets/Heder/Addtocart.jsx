import React from 'react'

const Addtocart = () => {
  return (
    <div class="max-w-3xl mx-auto px-4 py-10 space-y-4">
  <h1 class="text-3xl font-bold mb-6">Your Cart</h1>

  {/* <!-- Cart Card --> */}
  <div class="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition-shadow duration-200">
    
    {/* <!-- Product Image --> */}
    <img src="https://via.placeholder.com/120" alt="Product" class="w-28 h-28 object-cover rounded-lg sm:mr-6 mb-4 sm:mb-0" />

    {/* <!-- Product Details --> */}
    <div class="flex-1 flex flex-col justify-between">
      <div>
        <h2 class="font-semibold text-xl mb-1">Product Name</h2>
        <p class="text-gray-500 mb-2">$25 each</p>
        <p class="text-gray-700 text-sm">Some description or variant info can go here.</p>
      </div>

      {/* <!-- Quantity & Remove --> */}
      <div class="flex items-center justify-between mt-4 sm:mt-0">
        <div class="flex items-center gap-2">
          <button class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
          <span class="px-2 font-medium">1</span>
          <button class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
        </div>
        <button class="text-red-500 hover:text-red-700 font-semibold">Remove</button>
      </div>
    </div>

    {/* <!-- Price --> */}
    <div class="mt-4 sm:mt-0 sm:ml-6 text-lg font-bold">
      $25
    </div>
  </div>

  {/* <!-- Total Card --> */}
  <div class="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-inner mt-6">
    <h2 class="text-xl font-bold">Total:</h2>
    <p class="text-xl font-bold">$70</p>
  </div>

  {/* <!-- Checkout Button --> */}
  <button class="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold rounded-lg mt-4 transition-all duration-200">
    Checkout
  </button>
</div>

  )
}

export default Addtocart