import React, { useState, useEffect } from 'react';
import Checkout from '../../components/checkout';
import Button from '../../components/button';
import Modal from '../../components/modal/Modal';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map(item => item.id === id ? { ...item, quantity } : item);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSuccessfulCheckout = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    closeModal();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <span>{item.name}</span>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 p-1 border rounded mr-2" />
                  <span>${item.price} x {item.quantity}</span>
                  <Button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold mb-4">Total: ${totalPrice}</p>
          <div className="flex justify-center">
            <Button
              onClick={handleCheckout}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Checkout
            </Button>
          </div>
        </>
      )}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          <Checkout closeModal={closeModal} onSuccessfulCheckout={handleSuccessfulCheckout} />
        </div>
      </Modal>
    </div>
  );
}

export default Cart;