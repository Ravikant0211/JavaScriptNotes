// methods:- function inside object

// const person = {
//     firstName: "Ravi",
//     age: 18,
//     about: function() {
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
//     }
// }

// person.about();

function personInfo() {
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName: "Ravi",
    age: 18,
    about: personInfo
}

const person2 = {
    firstName: "Rohit",
    age: 10,
    about: personInfo
}

const person3 = {
    firstName: "Mohit",
    age: 19,
    about: personInfo
}

person1.about();
person2.about();
person3.about();