import React, { useState } from 'react';

function RadioProducts() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRadioChange = (event) => {
    const productId = parseInt(event.target.value, 10);
    setSelectedProduct(productId);
  };

  return (
    <div className="example-container">
      <h2>Example 4: Radio Button Selection</h2>
      {products.map(product => (
        <div key={product.id} className="radio-option">
          <input
            type="radio"
            id={`product-${product.id}`}
            name="product"
            value={product.id}
            checked={selectedProduct === product.id}
            onChange={handleRadioChange}
          />
          <label htmlFor={`product-${product.id}`}>{product.name}</label>
        </div>
      ))}

      {selectedProduct && (
        <p>Bạn đã chọn sản phẩm: {products.find(p => p.id === selectedProduct).name}</p>
      )}
    </div>
  );
}

export default RadioProducts; 