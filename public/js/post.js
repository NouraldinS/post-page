const select = selector => document.querySelector(selector);

select('#submit_0').addEventListener('click', (event) => {
  event.preventDefault();
  const body = select('#txt_0').value;
  const headers = {
    url: '/post',
    method: 'POST',
    body
  };
  fetch(headers, (res) => {
    if (res.msg === 'gocha!') {
      select('#notify_0').textContent = 'Your post was posted!';
    } else {
      select('#notify_0').textContent = 'Something went wrong!!';
    }
  });
});
