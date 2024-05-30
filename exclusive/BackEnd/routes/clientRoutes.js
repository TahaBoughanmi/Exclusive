const express = require('express');
const router = express.Router();
const Product = require('../database/Product');
// const User = require("../database/User");
// const Order = require('../database/Order');

router.get('/products', Product.getAllproducts);
router.get('/products/FS', Product.getTopStockProducts);
router.get('/products/:productId', Product.getOneProduct);
router.get('/products/category/:category',Product.getByCategory)

 
// router.post('/order',Order.addOrder)


// router.get('/:userid',User.getOneUser)
// router.put('/:userid',User.updateUser)
// router.post('/log',User.login)
// router.post('/reg',User.register)

module.exports=router