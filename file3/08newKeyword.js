// new keyword
function createuser(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

createuser.prototype.about = function() {
    console.log(this.firstName, this.age);
}

const user1 = new createuser("Ravi kant", 24);


// new keyword
// 1.) create empty object this = {}
// 2.) return this
// 3.) Object.create(createUser.prototype);
user1.about();