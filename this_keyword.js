var person = {name: "Fatima"};

function fun() {
	console.log(this.name);
}

// fun.call(person);

function Person(firstName, lastName, age, gender, eyeColor) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.gender = gender;
	this.eyeColor = eyeColor;
};

var PersonLambda = (firstName, lastName, age, gender, eyeColor) => ({
	firstName,
	lastName,
	age,
	gender,
	eyeColor
});

const myMate = Person("Albert", "Doherty", 36, "male", "green");

console.log(myMate);
