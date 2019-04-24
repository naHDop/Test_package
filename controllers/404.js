const loger   = require('./../helper/loger');

exports.get404 = (req, res, next) => {
    loger.addLog(`[ ${new Date()} ] [GET] [ url: ${req.url} ]\n`);
    res.status(404).render('404', { docTitle: 'Page not found', path: '404'});
}