// array push pop
// array shift unshift

let fruits = ["Apple", "Mango", "Grapes"];
console.log(fruits);

// // push() ---> adds elements at last
// fruits.push("banana");
// console.log(fruits); //output: ["Apple", "Mango", "Grapes", "banana"]

// pop() --> removes element from last and return it
// let poppedFruit = fruits.pop(); 
// console.log(fruits); //output: ["Apple", "Mango", "Grapes"]
// console.log("popped fruit is", poppedFruit); //output: banana

// unshift() ---> add element at start of the array object
fruits.unshift("Banana");
fruits.unshift("Blackberry");
console.log(fruits); //["Blackberry", "Banana", "Apple", "Mango", "Grapes"]

// shift() --> remove element from start of the array and return it
let removedFruit = fruits.shift();
console.log(fruits);
console.log("Removed fruit is", removedFruit); //output: Blackberry

// Push & pop operation is faster then unshift and shift operations