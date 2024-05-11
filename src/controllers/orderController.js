// src/controllers/orderController.js

const Product = require('../models/Product');

// Sample products data
const productsData = require('../data/productsData.json');

// Get all products
const getAllProducts = () => {
  return productsData.map(product => new Product(product.id, product.name, product.price, product.weight));
};

module.exports = {
  getAllProducts
};
 
