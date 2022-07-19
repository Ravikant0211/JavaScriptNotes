// rest parameters

// function myFunc(a, b, ...c) {
//     console.log(`a is ${a}`); //3
//     console.log(`b is ${b}`); //4
//     console.log(`c is ` + c); // [5,6,7,8,9]
// }

// myFunc(3,4,5,6,7,8,9);

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const  ans = addAll(2,3,4,5,6,7);
console.log(ans);