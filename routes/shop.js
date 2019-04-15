const path    = require('path');
const express = require('express');

const loger   = require('./../helper/loger');
const rootDir = require('../helper/path');

const router  = express.Router();
const adminData = require('./admin');


router.get('/', (req, res, next) => {
    loger.addLog(`[ ${new Date()} ] [GET] [ url: /shop${req.url} ]\n`);

    const products = adminData.products;
    res.render('shop', { 
        prods: products,
        docTitle: 'Shop',
        path: '/shop',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
    });
});

module.exports = router;