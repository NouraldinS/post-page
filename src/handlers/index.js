const handleClientError = require('./handleClientError');
const handlePosts = require('./handlePosts');
const handlePublicFiles = require('./handlePublicFiles');
const handlePost = require('./handlePost');
const handleGetData = require('./handleGetData');

module.exports = {
  handlePost,
  handlePosts,
  handleGetData,
  handlePublicFiles,
  handleClientError
};
