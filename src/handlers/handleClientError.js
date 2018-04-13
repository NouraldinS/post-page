const fs = require('fs');
const path = require('path');

const publicFiles = file => path.join(__dirname, '..', '..', 'public', file.split('.')[1], file);

module.exports = (req, res) => {
  fs.readFile(publicFiles('404.html'), (err, file) => {
    if (err) throw new Error(err);
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end(file);
  });
};
