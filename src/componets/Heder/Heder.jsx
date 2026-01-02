import React, { useState } from 'react'

const Heder = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
              E-Commerce Store
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Main Navigation */}
            <div className="flex space-x-6">
              <a href="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium ">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Products
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Categories
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium  ">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                <i className="fas fa-shopping-cart mr-2"></i>
                Cart (0)
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                <i className="fas fa-user mr-2"></i>
                Login
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t">
            <a href="#" className="text-gray-800 hover:text-blue-600 block px-3 py-2 text-base font-medium border-b-2 border-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium border-b-2 border-gray-300 hover:border-blue-600">
              Products
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium border-b-2 border-gray-300 hover:border-blue-600">
              Categories
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium border-b-2 border-gray-300 hover:border-blue-600">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium border-b-2 border-gray-300 hover:border-blue-600">
              Contact
            </a>
            <div className="border-t border-gray-200 pt-4 mt-4">
              <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium">
                <i className="fas fa-shopping-cart mr-2"></i>
                Cart (0)
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium">
                <i className="fas fa-user mr-2"></i>
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Heder

