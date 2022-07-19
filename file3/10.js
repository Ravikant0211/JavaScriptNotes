function CreateUser(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
}

CreateUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years old`;
};
CreateUser.prototype.is18 = function() {
    return this.age >= 18;
};
CreateUser.prototype.sing = function() {
    return "la la la la la";
};

const user1 = new CreateUser("Ravi", "kant", "Ravikant@gmail.com", 24, "my address");
const user2 = new CreateUser("Ravi", "kumar", "Ravikant@gmail.com", 24, "my address");
const user3 = new CreateUser("Ravi", "daksh", "Ravikant@gmail.com", 24, "my address");

for(let key in user1) {
    // console.log(key);
    if(user1.hasOwnProperty(key)) {
        console.log(key); //gives its own properties
    }
}