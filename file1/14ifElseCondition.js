// if else condition

let age = 18;

if(age > 18) {
    console.log("User can play ddlc");
} else {
    console.log("User can play mario");
}

let num = 15;

if(num%2==0){
    console.log("Even");
}
else {
    console.log("Odd");
}

// ###########################################################################################


//falsy values

// false
// ""
// null
// undefined
// 0

let firstName = undefined;

if(firstName){
    console.log(firstName);
}
else {
    console.log("firstName is kinda empty");
}

// ############################################################################################

// truthy value
// true
// "abc"
// 1, -1 or any number except 0
let variable = 4;
if(true){
    console.log(variable);
} 
else {
    console.log("this is falsy value");
}
