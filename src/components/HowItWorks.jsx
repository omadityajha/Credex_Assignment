import React from 'react';
import { FaUpload, FaCalculator, FaMoneyBillWave } from 'react-icons/fa';

function HowItWorks() {
  const steps = [
    {
      id: 1,
      name: 'Upload License',
      description: 'Securely upload your unused software license details through our encrypted portal.',
      icon: FaUpload,
    },
    {
      id: 2,
      name: 'Get Valuation',
      description: 'Our AI-powered system analyzes market demand and provides an instant valuation for your licenses.',
      icon: FaCalculator,
    },
    {
      id: 3,
      name: 'Get Paid',
      description: 'Accept our offer and receive payment within 24-48 hours via your preferred payment method.',
      icon: FaMoneyBillWave,
    },
  ];

  return (
    <section id="how-it-works" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Simple, Secure, and Fast
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Our streamlined process makes it easy to convert your unused software licenses into cash.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-md bg-primary text-white text-2xl mb-4">
                    <step.icon />
                  </div>
                  <div>
                    <p className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      {step.name}
                    </p>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
                {step.id < steps.length && (
                  <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2 w-8 h-1 bg-primary"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;