var person = {name: "Fatima"};

function fun() {
	console.log(this.name);
}

// fun.call(person);

function Person(firstName, lastName, birthYear, gender, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.gender = gender;
  this.eyeColor = eyeColor;
  // this.age = function () {
  //   return (new Date()).getFullYear() - this.birthYear;
  // };
}

Person.prototype.age = function () {
  return (new Date()).getFullYear() - this.birthYear;
}

class CPerson {
  constructor(firstName, lastName, birthYear, gender, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.gender = gender;
    this.eyeColor = eyeColor;
  }

  get age() {
    return (new Date()).getFullYear() - this.birthYear;
  }

  // calcAge() {
  //   return (new Date()).getFullYear() - this.birthYear;
  // }
};

// var PersonLambda = (firstName, lastName, age, gender, eyeColor) => ({
// 	firstName,
// 	lastName,
// 	age,
// 	gender,
// 	eyeColor
// });

const myMate1 = new Person("Albert", "Doherty", 1981, "male", "green");
console.log(myMate1);
console.log(myMate1.age());

const myMate2 = new CPerson("Jane", "Watson", 1983, "female", "brown");
console.log(myMate2);
console.log(myMate2.age);

console.log(Person.prototype);
console.log(CPerson.prototype);

// const protoL1 = Object.getPrototypeOf(myMate1);
// const protoL2 = Object.getPrototypeOf(protoL1);
// const protoL3 = Object.getPrototypeOf(protoL2);
// console.log();

// console.log(myMate1);
// console.log(protoL1);
// console.log(protoL2);
// console.log(protoL3);