const fs = require('fs');
const path = require('path');
const database = require('../database.json');

const publicFiles = file => path.join(__dirname, '..', '..', 'public', file.split('.')[1], file);

module.exports = {
  get: (req, res) => {
    fs.readFile(publicFiles('post.html'), (err, file) => {
      if (err) throw new Error(err);
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(file);
    });
  },

  post: (req, res) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString('utf8');
    })
      .on('end', () => {
        database[Date.now()] = body;
        fs.writeFile(
          path.join(__dirname, '..', 'database.json'),
          JSON.stringify(database),
          err => (err ? new Error(err) : undefined)
        );
      })
      .on('error', (err) => {
        throw new Error(err);
      });
    res.end(JSON.stringify({ msg: 'gocha!' }));
  }
};
