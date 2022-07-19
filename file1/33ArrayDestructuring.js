<<<<<<< HEAD
// Array destructuring

const array = ["value1", "value2", "value3", "value4", "value5"]; //["value1"];//["value1", "value2", "value3"];
// let var1 = array[0];
// let var2 = array[1];
// console.log("var1", var1); //var1 = value1
// console.log("var2", var2); //var2 = value2

let [var1, var2, ...myNewArray] = array; 
// var1 = "valuechanged"; //var1 and var2 are the simple variable used above
console.log("var1", var1);
console.log("var2", var2);
=======
// Array destructuring

const array = ["value1", "value2", "value3", "value4", "value5"]; //["value1"];//["value1", "value2", "value3"];
// let var1 = array[0];
// let var2 = array[1];
// console.log("var1", var1);
// console.log("var2", var2);

let [var1, var2, ...myNewArray] = array; 
// var1 = "valuechanged"; //var1 and var2 are the simple variable used above
console.log("var1", var1);
console.log("var2", var2);
>>>>>>> 245506c0649daf8040928746cd97fa789670a2a6
console.log("var3", myNewArray);