// Objects inside array
// *very important for real world application

const users = [
    {userId: 1, firstName: "Ravi", gender: "Male"},
    {userId: 2, firstName: "Rohit", gender: "Male"},
    {userId: 3, firstName: "Rashi", gender: "Female"},
]

console.log(Array.isArray(users)); //true
console.log(users); //output:   //(3) [{…}, {…}, {…}]
                                // 0: {userId: 1, firstName: 'Ravi', gender: 'Male'}
                                // 1: {userId: 2, firstName: 'Rohit', gender: 'Male'}
                                // 2: {userId: 3, firstName: 'Rashi', gender: 'Female'}
                                // length: 3

for(let user of users) {
    console.log(user["userId"]);
}                            