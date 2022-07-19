//Function expression

// function singHappyBirthday() {  // Function declaration
//     console.log("Happy birthday to you......");
// }
const singHappyBirthday = function() {
    console.log("Happy birthday to you......");
}
singHappyBirthday(); 




const  sumTwoNumbers = function(num1, num2) {  //function expression
    return num1 + num2;
}
const returnedValue = sumTwoNumbers(4, 5);
console.log("returnedValue:" + returnedValue); 





const isEven = function(number) {
    return number % 2 == 0;
}
console.log(isEven(9));
