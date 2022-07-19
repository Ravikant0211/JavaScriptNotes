// Nested Destructuring
const users = [
    {userId: 1, firstName: "Ravi", gender: "Male"},
    {userId: 2, firstName: "Rohit", gender: "Male"},
    {userId: 3, firstName: "Rashi", gender: "Female"},
]

// const [user1, user2, user3] = users;
// console.log(user2);  //{userId: 2, firstName: "Rohit", gender: "Male"}

const [{firstName: user1FirstName, userId: user1userId}, , {gender: user3gender}] = users;
console.log(user1FirstName); //Ravi
console.log(user1userId); // 1
console.log(user3gender); //Female