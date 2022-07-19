//Arrow Functions  *very important


// const singHappyBirthday = function() {
//     console.log("Happy birthday to you......");
// }

const singHappyBirthday = () => { // arrow function
    console.log("Happy birthday to you......");
}
singHappyBirthday(); 



const  sumTwoNumbers = (num1, num2) => {  //arrow function
    return num1 + num2;
}
const returnedValue = sumTwoNumbers(4, 2);
console.log("returnedValue:" + returnedValue); 



// const isEven = number => { //arrow function (incase of 'only one parameter' paranthesis removal does not throw any error)
//     return number % 2 == 0;
// }

//incase of only one line code for return
const isEven = number => number % 2 == 0; 
console.log(isEven(8));

const multiplyTwoNumbers = (num1, num2) => num1*num2;
console.log(multiplyTwoNumbers(3,4));


