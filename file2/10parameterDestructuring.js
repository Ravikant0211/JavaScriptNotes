// param destructuring

// Object
// react

const person = {
    firstName: "Ravi",
    gender: "male"
}

// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

function printDetails({firstName, gender}) {
    console.log(firstName); //Ravi
    console.log(gender); // male
    console.log(age); // error age is not defined
}
printDetails(person);