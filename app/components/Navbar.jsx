import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 10) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
    
    return () => {
      window.removeEventListener('scroll', () => {});
    }
  }, [])  

  return (
    <>
      <nav className={`w-full fixed px-4 py-4 flex items-center justify-between z-50 ${
        isScroll ? "bg-white bg-opacity-90 backdrop-blur shadow-sm dark:bg-gray-900/90 dark:backdrop-blur" : ""
      }`}>
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
          <a href="#top" className="text-2xl font-bold">
            MM
          </a>    

          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-6">
              <li><a className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors" href="#top">Home</a></li>
              <li><a className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors" href="#about">About</a></li>
              <li><a className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors" href="#work">Work</a></li>
              <li><a className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors" href="#contact">Contact</a></li>
            </ul>

            <button 
              onClick={() => setIsDarkMode(prev => !prev)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Toggle theme" className="w-5 h-5" />
            </button>
            
            <a 
              href="https://www.linkedin.com/in/munyaradzi-matindike-864884222/" 
              target="_blank"
              className="hidden md:flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Connect
            </a>
            
            <button 
              className="block md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 p-4">
          <div className="flex justify-between items-center mb-8">
            <a href="#top" className="text-2xl font-bold">MM</a>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <ul className="flex flex-col space-y-4 text-xl">
            <li><a onClick={() => setIsMobileMenuOpen(false)} href="#top">Home</a></li>
            <li><a onClick={() => setIsMobileMenuOpen(false)} href="#about">About</a></li>
            <li><a onClick={() => setIsMobileMenuOpen(false)} href="#work">Work</a></li>
            <li><a onClick={() => setIsMobileMenuOpen(false)} href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar
