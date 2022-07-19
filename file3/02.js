const userMethods = {
    about: function() {
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function() {
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser("Ravi", "kant", "Ravikant@gmail.com", 24, "my address");
const user2 = createUser("Ravi", "kumar", "Ravikant@gmail.com", 24, "my address");
const user3 = createUser("Ravi", "daksh", "Ravikant@gmail.com", 24, "my address");
console.log(user1.about());
// console.log(user2);
// console.log(user3);