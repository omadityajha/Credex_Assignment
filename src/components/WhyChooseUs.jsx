import React from 'react';
import { FaShieldAlt, FaMoneyBillWave, FaClock, FaGlobe } from 'react-icons/fa';

function WhyChooseUs() {
  const features = [
    {
      id: 1,
      name: 'Secure & Compliant',
      description: 'Our platform ensures all transactions meet legal and licensing requirements with full audit trails.',
      icon: FaShieldAlt,
    },
    {
      id: 2,
      name: 'Best Market Rates',
      description: 'Our extensive buyer network ensures you get the highest possible value for your licenses.',
      icon: FaMoneyBillWave,
    },
    {
      id: 3,
      name: 'Fast Turnaround',
      description: 'From valuation to payment, our streamlined process typically completes within 48 hours.',
      icon: FaClock,
    },
    {
      id: 4,
      name: 'Global Marketplace',
      description: 'Connect with buyers worldwide to maximize the value of your software assets.',
      icon: FaGlobe,
    },
  ];

  return (
    <section id="why-choose-us" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Why Choose Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            The SoftSell Advantage
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            We've built the most trusted platform for software license resale in the industry.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.id} className="relative">
                <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white text-xl mb-4">
                    <feature.icon />
                  </div>
                  <div>
                    <p className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      {feature.name}
                    </p>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;