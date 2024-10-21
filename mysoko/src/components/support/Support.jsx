import React, { useState } from 'react';
import Button from '../button';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white min-h-screen p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Support</h2>
      
      {/* Contact Information */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
        <p>Phone: (123) 456-7890</p>
        <p>Email: support@msoko.com</p>
      </div>

      {/* Support Form */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Submit a Support Request</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <Button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </Button>
        </form>
      </div>

      {/* Knowledge Base */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Knowledge Base</h3>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            <strong>How to Use Our Product (For Retailers):</strong>
            <p className="text-gray-700">
              1. <strong>Create an Account:</strong> Visit our website and click on the "Sign Up" button. Fill in your details and create a password to set up your retailer account.
              <br />
              2. <strong>List Your Products:</strong> Once logged in, navigate to the "Add Product" section. Fill in the product details, upload images, and set the price to list your products.
              <br />
              3. <strong>Manage Orders:</strong> Go to the "Orders" section to view and manage customer orders. Update the order status as you process and ship the orders.
              <br />
              4. <strong>Track Inventory:</strong> Keep track of your inventory levels in the "Inventory" section. Update stock quantities as needed to ensure accurate availability.
              <br />
              5. <strong>Analyze Sales:</strong> Use the "Sales Analytics" section to monitor your sales performance, track revenue, and identify trends to optimize your business.
            </p>
          </li>
          <li className="mb-2">
            <strong>Troubleshooting Common Issues:</strong>
            <p className="text-gray-700">
              1. <strong>Check Your Internet Connection:</strong> Ensure that you have a stable internet connection. Try refreshing the page or restarting your router if necessary.
              <br />
              2. <strong>Clear Browser Cache:</strong> Sometimes, clearing your browser's cache and cookies can resolve loading issues. Go to your browser settings and clear the cache.
              <br />
              3. <strong>Contact Support:</strong> If the issue persists, contact our support team with details of the problem. Provide screenshots if possible to help us assist you better.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Support;