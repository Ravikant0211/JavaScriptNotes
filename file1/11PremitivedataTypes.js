// Data types

//undefined
// const firstName; //Missing initializer in const declaration(error)
// let firstName;
// console.log(typeof firstName); //undefined
// firstName = "Ravikant";
// console.log(typeof firstName, firstName);


//null
// let myVariable = null;
// console.log(myVariable); //output:- null

// console.log(typeof  null); //bug, error

// BigInt
let myNumber = BigInt(266);
let number = 234n;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER); max_safe_Integer: 9007199254740991
console.log(myNumber); // 98473838383332238477374783488n
console.log(number);
console.log(myNumber + number);
