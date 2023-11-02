// const uid = Symbol('uid');
// console.log(uid);

// const user = {
//   // id: 'p1',
//   [uid]: 'p1',
//   name: 'Max',
//   age: 30,
//   [Symbol.toStringTag]: 'User Object',
// };

// console.log(user);
// console.log(user.toString());

const company = {
  curEmployee: 0,
  employees: ['Max', 'Manu', 'Anna'],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnValue = {
      value: this.employees[this.curEmployee],
      done: false,
    };
    this.curEmployee++;
    return returnValue;
  },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();

    // while (!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }

    let currentEmployee = 0;
    while(currentEmployee < this.employees.length){
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
};

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(...company);

// let employee = company.next();

// while(!employee.done){
//   console.log(employee.value);
//   employee = company.next();
// }

// REFLECT API

const course = {
  title: 'JavaScript - the complete guide'
};

Reflect.setPrototypeOf(course, {
  toString(){
    return this.title;
  }
});

console.log(course);

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    return obj[propertyName] || 'NOT FOUND';
  },
  set(obj, propertyName, newValue){
    obj[propertyName] = newValue;
  }
};

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;
console.log(pCourse.title, pCourse.length, pCourse.rating);
console.log(course, pCourse);