import { useState, useEffect } from 'react';

function Hero() {
  const [randomColor1, setRandomColor1] = useState(1);
  const [randomColor2, setRandomColor2] = useState(3);

  // Generate random color classes for accent elements
  useEffect(() => {
    setRandomColor1(Math.floor(Math.random() * 6) + 1);
    let color2 = Math.floor(Math.random() * 6) + 1;
    while (color2 === randomColor1) {
      color2 = Math.floor(Math.random() * 6) + 1;
    }
    setRandomColor2(color2);
  }, []);

  return (
    <section id="hero" className="relative bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-8 pb-16 md:pt-16 md:pb-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Software License</span>
              <span className="block text-primary">Resale Marketplace</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
              Recover costs on unused software licenses. Buy and sell with confidence on our secure, compliant platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="firebase-card p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Get an Instant Quote</h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4 border border-gray-200 dark:border-gray-700">
                <input 
                  type="text" 
                  placeholder="Enter software name (e.g., Adobe Creative Cloud)"
                  className="w-full bg-transparent border-none focus:outline-none text-gray-700 dark:text-gray-300"
                />
              </div>
              <div className="flex justify-between items-center">
                <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Popular software
                </button>
                <button className={`firebase-button-primary rgb-highlight-${randomColor1}`}>
                  Get Quote
                </button>
              </div>
            </div>
            
            <div className="firebase-card p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">My Listings</h2>
              <div className="firebase-workspace-card mb-4">
                <div className="flex items-center">
                  <div className={`h-8 w-8 rounded-md flex items-center justify-center rgb-highlight-${randomColor2} mr-3`}>
                    <span className="text-white font-medium">M</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Microsoft 365 Business</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Listed just now • $149/license</p>
                  </div>
                </div>
              </div>
              <button className="w-full firebase-button-secondary mt-2">
                View All Listings
              </button>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Our Services</h2>
            <div className="flex overflow-x-auto pb-4 space-x-4">
              <button className="firebase-button-secondary whitespace-nowrap">
                <span className="text-primary">+</span> Sell License
              </button>
              <button className="firebase-button-secondary whitespace-nowrap">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9M9 3L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Request Callback
              </button>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center rgb-highlight-1 text-white`}>
                <span className="text-xs">Buy</span>
              </div>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center rgb-highlight-2 text-white`}>
                <span className="text-xs">Sell</span>
              </div>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center rgb-highlight-3 text-white`}>
                <span className="text-xs">Audit</span>
              </div>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center rgb-highlight-4 text-white`}>
                <span className="text-xs">Legal</span>
              </div>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center rgb-highlight-5 text-white`}>
                <span className="text-xs">Help</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="border-t border-gray-200 dark:border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:text-primary">Marketplace Status</a>
            <span>—</span>
            <a href="#" className="hover:text-primary">Compliance Info</a>
            <span>—</span>
            <a href="#" className="hover:text-primary">License Guide</a>
            <span>—</span>
            <a href="#" className="hover:text-primary">Support</a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Hero;