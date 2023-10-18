class AgedPerson{
  printAge(){
    console.log(this.age);
  }
}

class Person extends AgedPerson{
    name = 'Max';

    constructor() {
      super();
        this.age = 30;
    }

    greet(){
        console.log(
            'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
        );
    }
}

// function Person() {

//   this.age = 30;
//   this.name = 'Max';
//   this.greet = function () {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   };
// }

// console.dir(Person);

// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// }

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.__proto__);
// console.log(p.__proto__ == Person.prototype);

const p = new Person();
console.log(p);