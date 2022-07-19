function hello() {
    console.log("Hello world");
}

console.log(hello.prototype);

// Only functions provide prototype property.

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyx";
hello.prototype.sing = function() {
    return "lallaalala";
};

console.log(hello.prototype.sing());
console.log(hello.prototype.abc);

// if(hello.prototype) {
//     console.log("prototype is present");
// } else {
//     console.log("prototype is not present");
// }