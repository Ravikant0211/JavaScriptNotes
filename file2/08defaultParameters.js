//default parameter

// function addTwo(a, b){
//     if(typeof b === "undefined"){
//         b = 1;
//     }
//     return a+b;
// }

function addTwo(a, b=0){ //default parameters
    return a+b;
}

const ans = addTwo(4, 8);
console.log(ans);