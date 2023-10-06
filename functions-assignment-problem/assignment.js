
const sayHello = (name) => {
  console.log('Hi ' + name);
}

const sayHello2 = (name, phrase) => {
  console.log(phrase + ' ' + name);
}

const sayHello3 = () => {
  console.log('Hi hard-coded');
}

const sayHello4 = (name) => {
  return 'Hi ' + name;
}

sayHello('Krystian');
sayHello2('Krystian', 'Hello');
sayHello3();
console.log(sayHello4('Krystian'));

const sayHello5 = (name, phrase = 'Hi') => {
  console.log(phrase + ' ' + name);
}

sayHello5('Krystian');

function checkInput(cb, ...strings){
  let hasEmptyText = false;
  for (const text of strings){
    if(text === '' || !text){
      hasEmptyText = true;
      break;
    }
  }
  if(!hasEmptyText){
    cb();
  }
}

checkInput(() => {
  console.log('All not empty!')
}, 'Hello',
'all');