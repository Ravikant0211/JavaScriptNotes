// Object --> reference type

// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

const person = { // when object is created using curley braces it is called object litteral
    name:"Ravi kant", 
    age:24,
    hobbies: ["Reading", "Music", "Gym"]
}; 
console.log(typeof person, person);

// how to access data from objects

// object's keys are called object's properties and are of string type by default

//Bracket notation
// console.log(person["name"]);
// console.log(person["age"]);

// dot notation
// console.log(person.name); 
// console.log(person.age);
// console.log(person.hobbies);

// how to add key value pair to objects
person["gender"] ="male";
// person.gender = "Male";
console.log(person);
console.log(person.gender);
