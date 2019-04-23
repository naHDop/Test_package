const express = require('express');

const productsController = require('../controllers/product');

const router  = express.Router();
const adminData = require('./admin');


router.get('/', productsController.getProducts);

module.exports = router;