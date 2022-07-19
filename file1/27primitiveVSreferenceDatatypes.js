<<<<<<< HEAD
// primitive vs reference data types
let num1= 6;
let num2 = num1;
console.log("value of num1 is", num1); //6 
console.log("value of num2 is", num2); //6
num1++; // num1 = 7
console.log("after incrementing num1");
console.log("value of num1 is", num1); //7
console.log("value of num2 is", num2); //6

//reference types
//array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1); //["item1", "item2"]
console.log("array2", array2); //["item1", "item2"]
array1.push("item3");
console.log("after pushing item3 to array1");
console.log("array1", array1); //["item1", "item2", "item3"]
console.log("array2", array2); //["item1", "item2", "item3"]
=======
// primitive vs reference data types
let num1= 6;
let num2 = num1;
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);
num1++;
console.log("after incrementing num1");
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);

//reference types
//array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing item3 to array1");
console.log("array1", array1);
console.log("array2", array2);
>>>>>>> 245506c0649daf8040928746cd97fa789670a2a6
