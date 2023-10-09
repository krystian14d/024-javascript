// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading'); //add at the end
// console.log(hobbies);
// hobbies.unshift('Coding'); //add at the beginning
// console.log(hobbies);
// const poppedValue = hobbies.pop();//delete last element
// console.log(hobbies);
// hobbies.shift();//delete first element
// console.log(hobbies);

// hobbies.splice(0,0,'Good food');

// const testResults = [1, 5.3, 2.6, 98.45, 14];
// const storedResults = testResults.concat([4,7,2,5]);//add array of elements at the end of the array

// console.log(storedResults);
// console.log(testResults.indexOf(2.6));

// const personData = [{ name: 'Max'}, { name: 'Manuel'}];
// console.log(personData.indexOf({name: 'Manuel'}));

// const manuel = personData.find((person, idx, persons) => {
//   return person.name === 'Manuel';
// });

// console.log(manuel);
// manuel.name = 'Anna';
// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// prices.forEach((price, idx, prices) => {
//   const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   return priceObj;
// });

// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });

// console.log(sortedPrices);

// const filteredArray = prices.filter((price, index, prices) => {
//   return price > 6;
// });

// // const filteredArray = prices.filter(price => price > 6);//alternatively

// console.log(filteredArray);

// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//   return prevValue + curValue;
// },0);

// console.log(sum);

// const data = 'new york;10.99;2000';

// const transformedData = data.split(';');
// console.log(transformedData);

// const nameFragments = ['Max', 'Schwarz'];
// const name = nameFragments.join(' ');
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// console.log(copiedNameFragments, nameFragments);
// copiedNameFragments.push('Mr');
// console.log(copiedNameFragments, nameFragments);

// const persons = [{name: 'Max', age: 30}, {name: 'Manuel', age: 31}];
// const copiedPersons = [...persons];

// persons.push({name: 'Anna', age: 28});
// console.log(pesons, copiedPersons);

const nameData = ['Max', 'Schwarz', 'Mr'];

// const firstName = nameData[0];
// const lastName = nameData[1];

const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);