// Inside App.js or Main.js

import React, { useState } from 'react';
import ProductList from './ProductList';
import OrderForm from './OrderForm';
import PackageDetails from './PackageDetails';

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [packages, setPackages] = useState([]);

  const handleItemSelection = (productId) => {
    // Logic to track selected items
    // Update selectedItems state
  };

  const handlePlaceOrder = (orderData) => {
    // Logic to submit order data to backend and receive package details
    // Update packages state with received data
  };

  return (
    <div>
      <ProductList handleItemSelection={handleItemSelection} />
      <OrderForm selectedItems={selectedItems} onPlaceOrder={handlePlaceOrder} />
      {packages.length > 0 && <PackageDetails packages={packages} />}
    </div>
  );
};

export default App;
