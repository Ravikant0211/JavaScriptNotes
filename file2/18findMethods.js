// find method of array
// takes callback function as a input

// const myArray = ["hello", "cat", "dog", "lion"];

// function isLength3(String){
//     return String.length === 3;
// }

// const ans = myArray.find(isLength3);
// console.log(ans); //cat (always gives first occurence)


const users = [
    {userId: 1, userName: "Ravi"},
    {userId: 2, userName: "Rohit"},
    {userId: 3, userName: "Mohit"},
    {userId: 4, userName: "Arun"},
    {userId: 5, userName: "Aman"},
];

const myUser = users.find((user) => user.userId===3);
console.log(myUser); //{userId: 3, userName: "Mohit"}
