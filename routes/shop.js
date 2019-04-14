const path    = require('path');
const express = require('express');

const loger   = require('./../helper/loger');
const rootDir = require('../helper/path');

const router  = express.Router();


router.get('/', (req, res, next) => {
    loger.addLog(`[ ${new Date()} ] [GET] [ url: /shop${req.url} ]\n`);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;