// what are Object Map


//object literals -- keys(always string or symbol)
// const person = {
//     firstName: "Ravi kant",
//     age: 24,
//     1: "one"
// }

// console.log(person["1"]);
// for(let key in person){
//     console.log(typeof key);
// }

//key value pair
const person = new Map();
person.set('firstName', "Ravi kant");
person.set(1, "one");
console.log(person); //{'firstName' => 'Ravi kant', 1 => 'one'}
console.log(person.get(1));
// console.log(person.keys());

// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

// for(let keyValuePair of person){
//     console.log(keyValuePair); //gives array of key value pair
// }

for(let [key, value] of person){
    console.log(key, value); //gives array of key value pair
}