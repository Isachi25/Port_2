import React, { useState } from 'react';
import ProductManagement from '../../components/productmanagement';
import OrderManagement from '../../components/ordermanagement';
import ProfileManagement from '../../components/profilemanagement';
import ReportsAnalytics from '../../components/report';
import Support from '../../components/support';
import Logout from '../../components/logout';

const RetailerDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);

  const renderContent = () => {
    switch (activeTab) {
      case 'products':
        return <ProductManagement products={products} setProducts={setProducts} />;
      case 'orders':
        return <OrderManagement />;
      case 'profile':
        return <ProfileManagement />;
      case 'reports':
        return <ReportsAnalytics />;
      case 'support':
        return <Support />;
      case 'settings':
        return <div>Settings Content</div>; // Placeholder for Settings content
      default:
        return <ProductManagement products={products} setProducts={setProducts} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed bg-green-900 text-white h-full p-4 w-32 md:w-48 lg:w-64 transition-all duration-300 ease-in-out flex flex-col justify-between">
        <nav>
          <ul>
            <li className="mb-3">
              <button
                onClick={() => setActiveTab('products')}
                className={`w-full text-left px-2 py-2 rounded transition duration-200 ease-in-out ${
                  activeTab === 'products' ? 'bg-yellow-600 text-white' : 'hover:bg-gray-700'
                }`}
              >
                Products
              </button>
            </li>
            <li className="mb-3">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full text-left px-2 py-2 rounded transition duration-200 ease-in-out ${
                  activeTab === 'orders' ? 'bg-yellow-600 text-white' : 'hover:bg-gray-700'
                }`}
              >
                Orders
              </button>
            </li>
            <li className="mb-3">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-2 py-2 rounded transition duration-200 ease-in-out ${
                  activeTab === 'profile' ? 'bg-yellow-600 text-white' : 'hover:bg-gray-700'
                }`}
              >
                Profile
              </button>
            </li>
            <li className="mb-3">
              <button
                onClick={() => setActiveTab('reports')}
                className={`w-full text-left px-2 py-2 rounded transition duration-200 ease-in-out ${
                  activeTab === 'reports' ? 'bg-yellow-600 text-white' : 'hover:bg-gray-700'
                }`}
              >
                Reports
              </button>
            </li>
            <li className="mb-3">
              <button
                onClick={() => setActiveTab('support')}
                className={`w-full text-left px-2 py-2 rounded transition duration-200 ease-in-out ${
                  activeTab === 'support' ? 'bg-yellow-600 text-white' : 'hover:bg-gray-700'
                }`}
              >
                Support
              </button>
            </li>
            <li className="mb-3">
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full text-left px-2 py-2 rounded transition duration-200 ease-in-out ${
                  activeTab === 'settings' ? 'bg-yellow-600 text-white' : 'hover:bg-gray-700'
                }`}
              >
                Settings
              </button>
            </li>
          </ul>
        </nav>
        <div>
          <Logout /> {/* Use the new LogoutButton component */}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 ml-32 md:ml-48 lg:ml-64">
        {renderContent()}
      </main>
    </div>
  );
};

export default RetailerDashboard;