import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" className="faq bg-gray-50 p-6 shadow-md relative overflow-hidden text-center">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">FAQ</h2>
      <div className="faq-item mb-6">
        <h3 className="text-xl font-medium text-gray-800">What is your return policy?</h3>
        <p className="text-gray-700 text-lg">
          Products should be returned upon delivery.
        </p>
      </div>
      <div className="faq-item">
        <h3 className="text-xl font-medium text-gray-800">Do you offer Delivery</h3>
        <p className="text-gray-700 text-lg">
          Yes, we offer delivery services at a fee.
        </p>
      </div>
    </section>
  );
};

export default FAQ;