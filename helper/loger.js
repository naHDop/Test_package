const fs         = require('fs');
const path       = require('path');

const rootDir    = require('./path');

const addLog = (data) => {
    fs.appendFile(path.join(rootDir, 'log', 'app.txt'), data, (err) => {
        if (err) throw err;
        // console.log('The "data to append" was appended to file!');
    });
}

module.exports = {
    addLog : addLog
 };