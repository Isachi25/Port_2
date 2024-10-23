import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../authcontext/AuthContext';
import Modal from '../modal/Modal';
import LoginForm from '../signinform/LoginForm';
import SearchBar from '../searchbar/SearchBar';
import SignUp from '../signup/SignUp';
import logo from '../../assets/images/logo.png';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const location = useLocation();
  const { isAuthenticated, signOut } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <header className="bg-green-900 text-white shadow-md z-50 mb-0 w-full">
      <nav className="flex justify-between items-center p-4 w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto rounded-full" />
          </Link>
        </div>

        <div className="flex-grow flex justify-center space-x-6">
          <Link to="/" className={`hover:text-gray-200 transition duration-200 ease-in-out ${location.pathname === '/' ? 'text-blue-200 font-bold' : ''}`}>
            Home
          </Link>
          <a href="#about-us" className="hover:text-gray-200 transition duration-200 ease-in-out">About Us</a>
          <a href="#testimonials" className="hover:text-gray-200 transition duration-200 ease-in-out">Testimonials</a>
          <a href="#faq" className="hover:text-gray-200 transition duration-200 ease-in-out">FAQ</a>
          {isAuthenticated && (
            <Link to="/dashboard" className={`hover:text-gray-200 transition duration-200 ease-in-out ${location.pathname === '/dashboard' ? 'text-blue-200 font-bold' : ''}`}>
              Dashboard
            </Link>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* Cart Button */}
          <div className="relative">
            <Link
              to="/cart"
              className="bg-gray-600 hover:bg-gray-500 p-2 rounded-full transition duration-200 ease-in-out focus:outline-none flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="text-white" />
            </Link>
          </div>

          {/* Sign In/Out Button */}
          <div className="relative flex items-center space-x-4">
            {isAuthenticated ? (
              <button
                onClick={signOut}
                className="hover:text-gray-200 transition duration-200 ease-in-out"
              >
                Sign Out
              </button>
            ) : (
              <>
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="hover:text-gray-200 transition duration-200 ease-in-out"
                >
                  Login
                </button>
                <button
                  onClick={() => setIsSignUpModalOpen(true)}
                  className="hover:text-gray-200 transition duration-200 ease-in-out"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Modal for Sign In */}
      <Modal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}>
        <LoginForm onClose={() => setIsLoginModalOpen(false)} />
      </Modal>

      {/* Modal for Sign Up */}
      <Modal isOpen={isSignUpModalOpen} onClose={() => setIsSignUpModalOpen(false)}>
        <SignUp isOpen={isSignUpModalOpen} onClose={() => setIsSignUpModalOpen(false)} />
      </Modal>
    </header>
  );
};

export default Navbar;