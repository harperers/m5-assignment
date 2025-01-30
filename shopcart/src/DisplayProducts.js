import React from 'react';

const DisplayProducts = ({ products, addProduct, subtractProduct, openModal }) => {
  return (
    <div className="product">
      {products.map(product => (
        <div key={product.id} className="item" >
          <h3>{product.desc}</h3>
          <img src={product.image} className="image" onClick={() => openModal(product)}/>
          <div>
            <span>Quantity: {product.value}</span>
            <div>
              <button onClick={() => subtractProduct(product.id)}>-</button>
              <button onClick={() => addProduct(product.id)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayProducts;
