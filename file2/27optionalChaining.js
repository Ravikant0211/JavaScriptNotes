// Optional chaining
// in case of nested objects, if there are uncertainity of definition of properties we use '?'
const user = {
    firstName: "Ravi kant",
    address: {houseNumber: '1234'}
}

console.log(user?.firstName);
console.log(user?.address?.houseNumber);