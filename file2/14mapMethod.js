// map method

// const numbers = [3,4,5,6,7];

//  const square = function(number){
//     return number*number;
//  }

//  const newArrayOfSquares = numbers.map((number, index) => {
//     return `index: ${index}, ${number*number}`;
//  });

//  console.log(newArrayOfSquares);


const users = [
    {firstName: "Ravi", age: 24},
    {firstName: "Mohit", age: 18},
    {firstName: "Rohit", age: 22},
    {firstName: "Garima", age: 22}
]

//returns a new array with the firstName of all user
// const userNames = users.map((user) => {
//     return user.firstName;
// });

// const userNames = users.map(user => user.firstName);

const userNames = users.map(myFunction);
function myFunction(user) {
    return user.firstName;
}

console.log(userNames); //['Ravi', 'Mohit', 'Rohit', 'Garima']

//map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.