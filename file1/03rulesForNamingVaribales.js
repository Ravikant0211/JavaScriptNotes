//rules for naming variables

//you can not start with number
//example :-
// 1value (invalid)
// value (valid)

var value1 = 2;
console.log(value1 ** 3);

//you can use only underscore _ or dollar symbol $
// first_name (valid)
// _firstname (valid)

// first$name (valid)
// $firstname (valid)

var $firstname = "Ravi";
console.log($firstname);

//you can not use spaces
// first name (invalid)
var first_name = "mohit"; //snake case writing
// var firstName = "mohit" //camel case writing
console.log(first_name);

//convention
//start with small letter and use camelCase