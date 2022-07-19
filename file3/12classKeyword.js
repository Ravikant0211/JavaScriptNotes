// 2015 or ES 2015
// class keyword
// in js class are fake


class CreateUser {
    constructor(firstName, lastName, email, age, address) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about() {
        return `${this.firstName} is ${this.age} years old`;
    }

    is18() {
        return this.age >= 18; 
    }

    sing() {
        return "la la la la la";
    }

    func(a) {
        console.log(a);
    }
} 

const user1 = new CreateUser("Ravi", "kant", "Ravikant@gmail.com", 24, "my address");
const user2 = new CreateUser("Ravi", "kumar", "Ravikant@gmail.com", 24, "my address");
const user3 = new CreateUser("Ravi", "daksh", "Ravikant@gmail.com", 24, "my address");
// console.log(Object.getPrototypeOf(user1));
user1.func("Ravi kant");
console.log(user1);

