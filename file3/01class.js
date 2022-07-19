// const user1 = {
//     firstName: "Ravi",
//     lastName: "kant",
//     email: "Ravikant@gmail.com",
//     age: 24,
//     address: "House number, Colony, Pincode, state",
//     about: function() {
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function() {
//         return this.age >= 18;
//     }
// }

// const aboutUser1 = user1.about();
// console.log(aboutUser1);

//function (that creates object)
//1. add key value pair
//2. return object

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function() {
        return `${this.firstName} is ${this.age} years old`;
    };
    user.is18 = function() {
        return this.age >= 18;
    };

    return user;
}

const user1 = createUser("Ravi", "kant", "Ravikant@gmail.com", 24, "my address");
console.log(user1);
console.log(user1.is18());
console.log(user1.about());
