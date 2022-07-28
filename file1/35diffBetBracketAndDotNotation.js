// difference between dot and bracket notation

const key = "email"; // add this as key in person object?
const person = { // when object is created using curley braces it is called object litteral
    name:"Ravi kant", 
    age:24,
    "person hobbies": ["Reading", "Music", "Gym"]
} 

// console.log(person.person hobbies); //problem, so here comes bracket notation
// console.log(person["person hobbies"]);

// person.key = "Ravikant02111@gmail.com"; // problem?? , here 'key' becomes key in person
person[key] = "Ravikant02111@gmail.com"; // person[key] is equals to person["email"]
console.log(person);
