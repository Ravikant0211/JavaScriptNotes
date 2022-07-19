// important array methods

// for each method
// map
// filter
// reduce


// 1. for each

// const numbers = [4,2,3,5];

// function multiplyBy2(number, index){
//     console.log("index is", index);
//     console.log(`${number}*2 = ${number*2}`);
// }


// for(let i = 0; i< numbers.length; i++){
//     multiplyBy2(numbers[i], i);
// }

// numbers.forEach(multiplyBy2); //same output as given by above for loop

// numbers.forEach(function(number, index) {
//     console.log(`number is ${number} and index is ${index}`);
// });

const users = [
    {firstName: "Ravi", age: 24},
    {firstName: "Mohit", age: 18},
    {firstName: "Rohit", age: 22},
    {firstName: "Garima", age: 22}
]

users.forEach(function(user){
    console.log(user.firstName);
});

users.forEach(user => {
    console.log(user.firstName);
})

// for(let user of users){
//     console.log(user.firstName);
// }
