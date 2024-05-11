import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from the backend when the component mounts
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <input type="checkbox" id={product.id} />
            <label htmlFor={product.id}>{product.name} - ${product.price} - {product.weight}g</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
