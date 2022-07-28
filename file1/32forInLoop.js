// for in loop in array
const fruits = ["apple", "grapes", "banana", "pineapple"];
const fruits2 = [];

for(let index in fruits) { //gives the index of array
    console.log(index); // 0 1 2 3 
    fruits2.push(fruits[index]);
}
console.log(fruits2);