// const h1 = document.querySelector('h1');
const h1 = document.getElementById('main-title');
h1.textContent = 'Some new title!';
h1.className = 'title';
h1.style.color = 'white';
h1.style.backgroundColor = 'red';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;


// const listItemElements = document.querySelectorAll('li'); //takes a snapshot
const listItemElements = document.getElementsByTagName('li'); //returns a 'live' list
for(const listItemEl of listItemElements){
  console.dir(listItemEl);
}