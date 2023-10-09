// const ids = new Set([1,2,3]);
// console.log(ids);
// ids.add(4);

// for(const entry of ids.entries){
//     console.log(entry);
// }

// const person1 = { name: 'Max' };
// const person2 = { name: 'Manuel' };

// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);
// personData.set(person2, [{ date: 'two days ago', price: 21 }])

// console.log(personData);
// console.log(personData.get(person1));

// for(const entry of personData.entries()){
//     console.log(entry);
// }

// for(const [key, value] of personData.entries()){
//     console.log(key, value);
// }

// for (const key of personData.keys()){
//     console.log(key);
// }

// for (const value of personData.values()){
//     console.log(key);
// }

//weakset

// let person = {name: 'Max'};
// const persons = new WeakSet();
// persons.add(person);

// console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra info');

person = null;

console.log(personData);