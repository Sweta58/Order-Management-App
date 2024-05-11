 
// src/routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Get all products
router.get('/products', (req, res) => {
  const products = orderController.getAllProducts();
  res.json(products);
});

module.exports = router;
