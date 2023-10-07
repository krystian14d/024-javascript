const task1El1 = document.getElementById('task-1');
const task1El2 = document.querySelector('#task-1'); //another solution to get the same element
const task1El3 = document.querySelector('li'); //another solution to get the same element

task1El1.style.color = 'white';
task1El2.style.backgroundColor = 'black';

const docTitle1 = document.querySelector('title');
docTitle1.textContent = "Assigment - solved";

//alternatively:
const docHead = document.head;
docTitle2 = document.head.querySelector('title');

// const h1 = document.querySelector('h1');
const h1 = document.getElementsByTagName('h1'); //gives collection
h1[0].textContent = 'Assigment - solved!';