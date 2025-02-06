import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ products }) => {
  const cartItems = products.filter(product => product.value > 0);
  const totalItems = cartItems.reduce((acc, product) => acc + product.value, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Your cart has {totalItems} items.</p>
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <div>
          {cartItems.map(product => (
            <div key={product.id} className="cart-item">
              <h3>{product.desc}</h3>
              <img src={product.image} className="cart-image" alt={product.desc} />
              <p>Quantity: {product.value}</p>
            </div>
          ))}
          <Link to="/signin">
            <button>Check Out</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;