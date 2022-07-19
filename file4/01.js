// closures

// function can return function

// function outerFunction() {
//     function innnerFunction() {
//         console.log("Hello world");
//     }
//     return innnerFunction;
// }

// const ans = outerFunction();
// ans();

// function printFullName(firstName, lastName) {
//     function printName() {
//         console.log(firstName, lastName);
//     }
//     return printName;
// }

// const ans = printFullName("Ravi", "Kant");
// ans();


// function hello(x) {
//     const a = "varA";
//     const b = "varB";
//     return function() {
//         console.log(a, b, x);
//     }
// }

// const ans = hello("argument");
// ans();


// function myFunction(Power) {
//     return function(x) {
//         // console.log(Math.pow(x, Power));
//         return x ** Power;
//     }
// }

// const square = myFunction(3);
// const ans = square(7);
// console.log(ans);

// const myFunction = Power => number => number ** Power;
            
// const square = myFunction(3);
// const ans = square(7);
// console.log(ans);





// Application of closure
function func() {
    let count = 0;
    return function() {
        if(count < 1) {
            console.log("Hey, You called me!!");
        }
        else {
            console.log(`Hey, you called me ${count} time.`);
        }
        count++;
    }
}
const myFunc = func();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
