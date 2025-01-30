import React from 'react';

const ProductModal = ({ selectedProduct, closeModal }) => {
  if (!selectedProduct) return null;
  return (
    <div className="modal">
      <div className="modal2">
        <span onClick={closeModal}>&times;</span>
        <h3>{selectedProduct.desc}</h3>
        <img src={selectedProduct.image} className="image" />
        <p>Ratings: {selectedProduct.ratings}</p>
        <p>Description: {selectedProduct.desc}</p>
        <p>Quantity: {selectedProduct.value}</p>
      </div>
    </div>
  );
}

export default ProductModal;