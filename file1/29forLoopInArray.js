//for loop in array

let fruits = ["apple", "mango", "grapes", "banana"];
fruits.length; //gives the length of the array

console.log(fruits.length);
// console.log(fruits[fruits.length-1]);

let fruits2 = [];
for(let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i].toUpperCase()+" ");
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);