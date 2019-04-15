const express     = require('express');
const bodyParser  = require('body-parser');
const path        = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData   = require('./routes/admin');
const shopRouter  = require('./routes/shop');
const loger       = require('./helper/loger');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRouter);

app.use((req, res, next) => {
    loger.addLog(`[ ${new Date()} ] [GET] [ url: ${req.url} ]\n`);
    res.status(404).render('404', { docTitle: 'Page not found' });
})

// app.use((req, res, next) => {
//     // console.log('this bloc run always !');
//     next();
// });


if (app.listen(3000)) {
    loger.addLog(`[ ${new Date()} ] [ server run on localhost:3000 ]\n`);

    console.log(
        `server run on localhost:3000`
    );

} else {
    console.log('server run is fall +(');
}

