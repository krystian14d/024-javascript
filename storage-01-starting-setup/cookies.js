const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = {
    name: 'Max',
    age: 30,
    hobbies: ['Cooking', 'Sports']
  };
  document.cookie = `uid=${userId}`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
  const cookieData = document.cookie.split(';');
  cookieData.map(i => {
    return i.trim();
  });
  console.log(data);
});