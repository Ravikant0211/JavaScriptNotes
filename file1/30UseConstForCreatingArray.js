// use const for creating array

// const pi = 3.14;
// pi = 3; // Uncaught TypeError: Assignment to constant variable.
// console.log(pi);

// heap memory ["apple", "mango"] address: 0x11 (suppose)
const fruits = ["apple", "mango"]; //address: 0x11 (suppose)
fruits.push("Banana"); //here we are not changing the address but value in heap.

// fruits = ["apple", "mango", "banana"]; // here i am trying to change the object
// Assignment to constant variable.
console.log(fruits);