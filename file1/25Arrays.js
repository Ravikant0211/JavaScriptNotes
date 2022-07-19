// intro of Array
// reference type --> object
// how to create arrays

// ordered collection of items of similar or different data types

let fruits = ["Apple", "Mango", "Grapes"];
let obj = {};
// let mixed = [1, 2, 4.5, "string", null, undefined];
// console.log(mixed);

// console.log(fruits);
// fruits[1] = "Banana";
// console.log(fruits);

// fruits[3] = "Blackberry";
// console.log(typeof fruits, fruits);

console.log(typeof fruits); //output: object
console.log(typeof obj); //output: object
console.log(Array.isArray(obj)); //obj is not an array but it is a object
console.log(Array.isArray(fruits)); //to check whether the obj is array or not

// array indexing