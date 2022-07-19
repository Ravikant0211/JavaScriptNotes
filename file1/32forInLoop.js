<<<<<<< HEAD
// for in loop in array
const fruits = ["apple", "grapes", "banana", "pineapple"];
const fruits2 = [];

for(let index in fruits) { //gives the index of array
    console.log(index); // 0 1 2 3 
    fruits2.push(fruits[index]);
}
=======
// for in loop in array
const fruits = ["apple", "grapes", "banana", "pineapple"];
const fruits2 = [];

for(let index in fruits) {
    fruits2.push(fruits[index]);
}
>>>>>>> 245506c0649daf8040928746cd97fa789670a2a6
console.log(fruits2);