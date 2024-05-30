const express = require('express');
const router = express.Router();
const Product = require('../database/Product');
const User = require("../database/User");
const Order = require('../database/Order');


router.get('/products', Product.getOneProduct);
router.put('/products/:productId', Product.modifyProduct);
router.delete('/products/category/:category',Product.removeProduct)
router.post('/products/add',Product.addProduct)

//JWT token 

// router.get('/:userid',User.getOneUser)
// router.put('/:userid',User.updateUser)

// router.post('/log',User.login)
// router.post('/reg',User.register)
module.exports=router