class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating.`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }

}

// dog class
class Dog extends Animal{
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed}Kmph`;
    }
}

const tommy = new Dog("tommy", 3, 45);

console.log(tommy);
console.log(tommy.run());
