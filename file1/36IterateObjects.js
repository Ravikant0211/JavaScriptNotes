// how to iterate objects

const person = { // when object is created using curley braces it is called object litteral
    name:"Ravi kant", 
    age:24,
    "person hobbies": ["Reading", "Music", "Gym"]
}

// using for in loop

// for(let key in person) {
//     // console.log(person[key]); // here person.key gives undefined error
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key,":", person[key]);
// }


// using object.keys

// console.log(Object.keys(person));
// console.log(Array.isArray(Object.keys(person)));

for(let key of Object.keys(person)) { //'Object.keys(object_name)' helps in iterating over the keys of object
    console.log(person[key]);
}