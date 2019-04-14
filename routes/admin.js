const path    = require('path');
const express = require('express');

const loger   = require('./../helper/loger');
const rootDir = require('../helper/path');

const router  = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    loger.addLog(`[ ${new Date()} ] [GET] [ url: /admin${req.url} ]\n`);

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    loger.addLog(`[ ${new Date()} ] [POST] [ url: /admin${req.url} ]\n`);
    products.push({ title: req.body.title })

    res.redirect('/');
});

exports.routes   = router;
exports.products = products