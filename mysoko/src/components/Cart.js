import React from 'react';

const Cart = () => {
  // Placeholder cart items
  const cartItems = [
    { id: 1, name: 'Product 1', price: 100, quantity: 1 },
    { id: 2, name: 'Product 2', price: 200, quantity: 2 },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;