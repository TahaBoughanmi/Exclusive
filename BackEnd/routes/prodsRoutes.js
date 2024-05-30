const routerPROD = require("express").Router();
const contPROD = require('../database/productCont')
 
 
routerPROD.get('/findall',contPROD.getProducts)
routerPROD.get('/findone/:id',contPROD.getOneProduct)
routerPROD.post('/create',contPROD.addProduct)
routerPROD.put('/:id',contPROD.update)
routerPROD.delete('/delete/:id',contPROD.remove)

module.exports = routerPROD