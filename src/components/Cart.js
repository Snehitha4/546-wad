import React from 'react';
import './Cart.css';

function Cart() {
  const cartItems = [
    { id: 1, name: 'Product 1', description: 'Description for product 1', imageurl:"data:image/jpeg;base64,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"},
    { id: 2, name: 'Product 2', description: 'Description for product 2' ,imageurl:"data:image/jpeg;base64,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"},
  ];

  return (
    <div>
      <h2>Cart</h2>
      <div className="cart-grid">
        {cartItems.map(item => (
          <div key={item.id} className="cart-card">
            <img src={item.imageurl} alt="Product" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button className='cart-btn p-2'>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
