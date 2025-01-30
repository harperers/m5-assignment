import React from 'react';

const Cart = ({ products }) => {
  const cartItems = products.filter(product => product.value > 0);

  return (
    <div >
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(product => (
            <div key={product.id} className="cart-item">
              <h3>{product.desc}</h3>
              <img src={product.image} className="cart-image" />
              <p>Quantity: {product.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;

