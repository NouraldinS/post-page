const {
  handlePost,
  handlePosts,
  handleGetData,
  handlePublicFiles,
  handleClientError
} = require('./handlers');

module.exports = (req, res) => {
  const { url: endpoint, method } = req;
  const url = `${method} ${endpoint}`;
  console.log(url);
  switch (url) {
    case 'GET /':
    case 'GET /post': return handlePost.get(req, res);
    case 'GET /posts': return handlePosts(req, res);
    case 'GET /data': return handleGetData(req, res);
    case 'POST /post': return handlePost.post(req, res);
    case String(url.match(/GET \/import.*/g)): return handlePublicFiles(req, res);
    default: return handleClientError(req, res);
  }
};
