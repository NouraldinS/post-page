const fs = require('fs');
const path = require('path');

const publicFiles = fileName => path.join(__dirname, '..', '..', 'public', fileName.split('.')[1], fileName);

const types = {
  html: 'text/html',
  css: 'text/css',
  jpg: 'images/jpg',
  png: 'images/png',
  ico: 'images/ico',
  js: 'text/javascript'
};

module.exports = (req, res) => {
  const url = req.url.substring(7);
  fs.readFile(publicFiles(url), (err, file) => {
    if (err) throw new Error(err);
    res.writeHead(200, { 'content-type': `${types[req.url.split('.')[1]]}` });
    res.end(file);
  });
};
