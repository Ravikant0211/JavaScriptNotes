//falsy values

// false
// ""
// null
// undefined
// 0

let firstName = undefined;

if(false){
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
