import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2023 MySoko. All rights reserved.</p>
        <p className="mb-4">Contact us: <a href="mailto:contact@mysoko.com" className="text-blue-400">support@mysoko.com</a></p>
        <div className="flex justify-center items-center space-x-4 mt-2">
          <p className="text-white flex items-center">
            <span className="mr-2">Socials:</span>
            <a href="https://www.facebook.com/mysoko" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400 mx-2">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/mysoko" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-200 mx-2">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/mysoko" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-400 mx-2">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;