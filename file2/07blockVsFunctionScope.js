// block scope vs function scope

//let and const are block scope
//var is function scope

// {
//     const firstName = "Ravi";
//     console.log(firstName);
//     //let and const variables can be accesed only in the block in which they are defined
// }
// console.log(firstName); //firstName is not defined

// {
//     const firstName = "Mohit";
//     console.log(firstName);
// }

// const firstName = "Garima";
// console.log(firstName);

// {
//     firstName = "Mohit";
//     console.log(firstName);
// }

// {
//     console.log(firstName);
// }


// if(true) {
//     var firstName = "Ravi";
//     console.log(firstName);
// }
// console.log(firstName);

function myApp() {
    if(true) {
        var firstName = "Ravi"; 
        console.log(firstName);
    }
    console.log(firstName); //not defined/accesible (let/const)
}
myApp();

console.log(firstName); ////not defined/accesible (var/let/const)
