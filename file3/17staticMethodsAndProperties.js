// static methods and properties

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static classInfo(){
        return "this is a Person class";
    }

    static desc = "static property";

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(full_name){
        const [firstName, lastName] = full_name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat() {
        return `${this.firstName} is eating.`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }

}

const person1 = new Person("Ravi", "kant", 24);
console.log(Person.classInfo()); //this is a Person class
console.log(Person.desc); //static property
