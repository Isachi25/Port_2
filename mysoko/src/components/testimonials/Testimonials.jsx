import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-gray-50 p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-opacity-50 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/background-image.jpg)' }}></div>
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Testimonials</h2>
        <div className="space-y-4">
            <p className="text-gray-700 text-lg italic text-center">
              "My products were delivered fresh and on time!" - Sharon
            </p>
            <p className="text-gray-700 text-lg italic text-center">
              "Excellent quality and fantastic customer service." - Nic
            </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;