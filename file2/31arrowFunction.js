// arrow function
// arrow function takes 'this' from its surroundings level one up
// call() method does not work here

const user1 = {
    firstName: "Ravi kant",
    age: 8,
    about: () => {
        // console.log(this);
        console.log(this.firstName, this.age);
    }
}

user1.about(user1); //undefined undefined