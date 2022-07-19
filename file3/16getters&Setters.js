// getter and setters

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(full_name){
        const [firstName, lastName] = full_name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("Ravi", "kant", 24);
// console.log(person1.fullName()); // error: person1.fullName is not a function
// console.log(person1.fullName);


// person1.firstName = "Mohit";
// person1.lastName = "Prajapati";
// console.log(person1.fullName); // Mohit Prajapati

// person1.fullName = "Mohit Prajapati"
// console.log(person1);
// console.log(person1.fullName);

person1.fullName = "Mohit kumar";
console.log(person1.firstName); //Mohit
console.log(person1.fullName); // Mohit Kumar

