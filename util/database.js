const Sequilize = require('sequelize');

const sequelize = new Sequilize(
    'node-udemy', // sheima
    'root', // login
    'password', // password
    {
        dialect: 'mysql', //db
        host: 'localhost'
    }
);

module.exports = sequelize;

// const mysql = require('mysql2');

// const pool  = mysql.createPool({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     database: 'node-udemy',
//     password: 'password'
// });

// module.exports = pool.promise();