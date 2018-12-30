// class Student {
//   // this constructor is identical to that of a mentor!
//   constructor(name, quirkyFact) {
//     this.name = name;
//     this.quirkyFact = quirkyFact;
//   }

//   // here is a method that is specific to students
//   enroll(cohort) {
//     this.cohort = cohort;
//   }

//   // identical! Smells of code duplication
//   bio() {
//     return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
//   }
// }

// class Mentor {
//   // this constructor is identical to that of a student!
//   constructor(name, quirkyFact) {
//     this.name = name;
//     this.quirkyFact = quirkyFact;
//   }

//   // specific to mentors
//   goOnShift() {
//     this.onShift = true;
//   }

//   // specific to mentors
//   goOffShift() {
//     this.onShift = false;
//   }

//   // identical! Smells of code duplication
//   bio() {
//     return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
//   }
// }

class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact, email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}


class Student extends Person {
  // stays in Student class since it's specific to students only
  constructor(name, quirkyFact, email) {
    super(name, quirkyFact);
    this.email = email;
  }

  enroll(cohort) {
    this.cohort = cohort;
  }
}

const info = new Student('Ethena Lee', 'Love cats', 'user@gmail.com')
console.log(info.enroll('cohort'));

class Mentor extends Person {

  constructor(name, quirkyFact, email) {
    super(name, quirkyFact);
    this.email = email;
  }
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}
