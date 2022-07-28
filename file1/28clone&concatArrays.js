//how to clone array

// how to concat two array

// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log(array1 === array2); //here references are same that is why output is true.
// let array2 = ["item1", "item2"];
// console.log(array1 === array2); //here comparing references not values that is why output is false.

// this is not the right way of cloning
// let array2 = ["item1", "item3"];
// array1.push("item3");
// console.log(array1 === array2); //false
// console.log(array1);
// console.log(array2);

// we can use slice() method of array for cloning 
// let array2 = array1.slice(0);
// console.log(array1 === array2); //false (because these are different objects)
// array1.push("item3");
// console.log(array1);
// console.log(array2);

// we can also use concat() method for cloning

// let array2 = [].concat(array1); //---> concat() method
// spread operator
// let array2 = [...array1];  //---> using spread operator
// array1.push("item3");

// console.log(array1 === array2); //false (after cloning they become two different objects)
// console.log(array1);
// console.log(array2);

let array1 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4", "item5"]);
// let array2 = [].concat(array1).concat(["item3", "item4", "item5"]);
// let array2 = [...array1, "item3", "item4", "item5"];
let oneMoreArray = ["item3", "item4", "item5", "item6"];
let array2 = [...array1, ...oneMoreArray];
console.log(array1 === array2);
console.log(array1);
console.log(array2);

