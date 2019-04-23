const rootDir = require('../helper/path');
const loger   = require('./../helper/loger');
const products = [];

exports.getAddProduct = (req, res, next) => {
    loger.addLog(`[ ${new Date()} ] [GET] [ url: /admin${req.url} ]\n`);

    res.render('add-product', { 
        docTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    loger.addLog(`[ ${new Date()} ] [POST] [ url: /admin${req.url} ]\n`);
    products.push({ title: req.body.title })

    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    loger.addLog(`[ ${new Date()} ] [GET] [ url: /shop${req.url} ]\n`);

    res.render('shop', { 
        prods: products,
        docTitle: 'Shop',
        path: '/shop',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
    });
};
