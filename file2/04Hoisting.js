// hoisting :- calling a function or variable before declaring it, called hoisting.

// hello();

// function hello() { //works with only function declaration
//     console.log("hello world");
// }

// const hello = function() { //Cannot access 'hello' before initialization
//     console.log("hello world");
// }

// const hello = () => { //Cannot access 'hello' before initialization
//     console.log("hello world");
// }


// console.log(hello); //undefined
// var hello = "hello world";

// console.log(hello); //Cannot access 'hello' before initialization
// let hello = "hello world";

console.log(hello); //Cannot access 'hello' before initialization
const hello = "hello world";