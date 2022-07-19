
const user1 = {
    firstName: "Ravi kant",
    age: 8,
    about: function(){
        // console.log(this); //represents window
        console.log(this.firstName, this.age);
    }
}

// don't do this mistake

// user1.about();

// const myFunc = user1.about;
// either of both same
// const myFunc = function(){
//     // console.log(this); //represents window
//     console.log(this.firstName, this.age);
// }
// myFunc(); //undefined undefined

const myFunc = user1.about.bind(user1);
myFunc(); //Ravi kant 8