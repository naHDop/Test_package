const loger   = require('./../helper/loger');
const Product = require('../models/product');

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
    const product = new Product(req.body.title);
    product.save();

    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    loger.addLog(`[ ${new Date()} ] [GET] [ url: /shop${req.url} ]\n`);
    Product.fetchAll((products) => {
        res.render('shop', { 
            prods: products,
            docTitle: 'Shop',
            path: '/shop',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true,
        });
    });
};
