const select = selector => document.querySelector(selector);
const getPosts = () => {
  const headers = {
    method: 'GET',
    url: '/data'
  };
  fetch(headers, (res) => {
    const posts = Object.values(res);
    posts.forEach((post) => {
      const listItem = document.createElement('li');
      listItem.textContent = post;
      select('#post_list_0').appendChild(listItem);
    });
  });
};
getPosts();
