//call apply Bind

// const user1 = {
//     firstName: "Ravi kant",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age)
//     }
// }

// const user2 = {
//     firstName: "Mohit",
//     age: 9
// }

// // Syntax: Object.about.call(object you are calling for)
// user1.about.call(); //undefined undefined
// user1.about.call(user1); // Ravi kant 8
// user1.about.call(user2); // Mohit 9

const user1 = {
    firstName: "Ravi kant",
    age: 8,
    about: function(hobby, favMusician){
        console.log(this.firstName, this.age, hobby, favMusician);
    }
}

const user2 = {
    firstName: "Mohit",
    age: 9
}

user1.about.call(user2); //Mohit 9 undefined undefined
user1.about.call(user2, "guitar", "A R rahman");

//apply
user1.about.apply(user2, ["guitar", "Himesh"]); //Mohit 9 guitar Himesh

//Bind
// bind returns a function
const func = user1.about.bind(user2, "guitar", "bach");
func(); // Mohit 9 guitar bach