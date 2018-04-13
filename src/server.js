const http = require('http');
const router = require('./router');
const port = process.env.PORT || 4000;

http.createServer(router).listen(port, () => console.log(`Server running on port ${port}`));
