const fs = require('fs');
const path = require('path');

const publicFiles = file => path.join(__dirname, '..', '..', 'public', file.split('.')[1], file);

module.exports = (req, res) => {
  fs.readFile(publicFiles('posts.html'), (err, file) => {
    if (err) throw new Error(err);
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(file);
  });
};
