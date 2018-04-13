const database = require('../database.json');

module.exports = (req, res) => {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify(database));
};
