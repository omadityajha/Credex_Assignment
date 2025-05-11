import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [randomColor, setRandomColor] = useState(1);
  const [scrolled, setScrolled] = useState(false);

  // Generate random color class for accent elements
  useEffect(() => {
    setRandomColor(Math.floor(Math.random() * 6) + 1);
    
    // Add scroll event listener
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <nav className={`bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <a href="#hero" className="flex items-center group">
                  <div className={`h-10 w-10 rounded-md flex items-center justify-center rgb-highlight-${randomColor} transition-transform duration-300 group-hover:scale-110`}>
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <span className="ml-3 text-2xl font-bold text-gray-900 dark:text-white transition-all duration-300 group-hover:text-primary">SoftSell</span>
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">BETA</span>
                </a>
              </div>
              <div className="hidden lg:ml-10 lg:flex lg:space-x-8">
                <a href="#marketplace" className="firebase-nav-item relative overflow-hidden group">
                  <span className="relative z-10">Marketplace</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#services" className="firebase-nav-item relative overflow-hidden group">
                  <span className="relative z-10">Services</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#pricing" className="firebase-nav-item relative overflow-hidden group">
                  <span className="relative z-10">Pricing</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#how-it-works" className="firebase-nav-item relative overflow-hidden group">
                  <span className="relative z-10">How It Works</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#why-choose-us" className="firebase-nav-item relative overflow-hidden group">
                  <span className="relative z-10">Why Choose Us</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#testimonials" className="firebase-nav-item relative overflow-hidden group">
                  <span className="relative z-10">Testimonials</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#contact" className="firebase-nav-item relative overflow-hidden group">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="ml-4 hidden md:flex items-center">
                <button className="firebase-button-primary mr-5 hover:scale-105 transition-transform duration-300">
                  Get a Quote
                </button>
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-300 cursor-pointer">
                  U
                </div>
              </div>
              
              <div className="ml-4 md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors duration-300"
                >
                  <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} sm:hidden overflow-hidden transition-all duration-300 ease-in-out`}>
          <div className="pt-2 pb-3 space-y-1 px-4">
            <a
              href="#marketplace"
              className="firebase-nav-item block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </a>
            <a
              href="#services"
              className="firebase-nav-item block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#pricing"
              className="firebase-nav-item block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#how-it-works"
              className="firebase-nav-item block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#why-choose-us"
              className="firebase-nav-item block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              className="firebase-nav-item block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="firebase-nav-item block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button
              className="w-full firebase-button-primary mt-4 py-3 hover:bg-primary-dark transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </nav>
      
      {/* Theme toggle positioned below navbar */}
      <div className="fixed right-6 top-20 z-50 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110">
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </>
  );
}

export default Navbar;