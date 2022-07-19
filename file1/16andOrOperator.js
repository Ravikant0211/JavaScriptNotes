// And or operator

let firstName = "Harshit";
let age = 16;

// if(firstName[0] === "H") {
//     console.log("your name starts with H");
// }

// if(age > 18) {
//     console.log("You are above 18");
// }

// if(firstName[0] === "H" && age > 18) {  // && --> 'and' operator
//     console.log("Name starts with H and above 18");
// }

if(firstName[0] === "H" || age > 18) {  // || --> 'or' operator
    console.log("Name starts with H and above 18");
}