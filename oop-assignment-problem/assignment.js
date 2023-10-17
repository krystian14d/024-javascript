class Course {

#price;

    get price() {
        return '$' + this.#price;
    }

    set price(value){
        if(value < 0){
            throw 'Invalid value!';
        }
        this.#price = value;
    }

  constructor(courseTitle, coursePrice, courseLength) {
    this.title = courseTitle;
    this.#price = coursePrice;
    this.length = courseLength;
  }

  calculateValue() {
    return this.length / this.#price;
  }

  printSummary() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`
    );
  }
}

const jsCourse = new Course('JavaScript', 50, 44);
const reactCourse = new Course('React', 60, 36);

console.log(jsCourse);
console.log(reactCourse);

console.log(jsCourse.calculateValue());
console.log(jsCourse.printSummary());
console.log(reactCourse.calculateValue());
console.log(reactCourse.printSummary());

class PracticalCourse extends Course {
  constructor(title, length, price, execrisesCount) {
    super(title, price, length);
    this.numOfExercises = execrisesCount;
  }
}

const angularCourse = new PracticalCourse('Angular course', 36, 50, 10);

class TheoreticalCourse extends Course {
  publish() {
    console.log('publishing...');
  }
}

const flutterCourse = new TheoreticalCourse('Flutter', 50, 48);

flutterCourse.printSummary();
flutterCourse.publish();