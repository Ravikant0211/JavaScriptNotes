// const userMethods = {
//     about: function() {
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function() {
//         return this.age >= 18;
//     },
//     sing: function() {
//         return "lalalalala";
//     }
// }


function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype); // it creates proto chaining of two objects
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
   
    return user;
}
createUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years old`;
};
createUser.prototype.is18 = function() {
    return this.age >= 18;
};
createUser.prototype.sing = function() {
    return "la la la la la";
};





const user1 = createUser("Ravi", "kant", "Ravikant@gmail.com", 24, "my address");
const user2 = createUser("Ravi", "kumar", "Ravikant@gmail.com", 24, "my address");
const user3 = createUser("Ravi", "daksh", "Ravikant@gmail.com", 24, "my address");
console.log(user1);
console.log(user1.sing());