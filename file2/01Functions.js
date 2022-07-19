//Functions --> *very important

//Basics of functions
//-----------------------------------------------------------------------

function singHappyBirthday() {
    console.log("Happy birthday to you......");
}

singHappyBirthday(); // function call

function sumTwoNumbers(num1, num2) { // num1, num2 are parameter
    return num1 + num2;
}

const returnedValue = sumTwoNumbers(4, 5); //passing argument into function sumTwoNumbers
console.log("returnedValue:" + returnedValue); //returnedValue:9


// odd or even
// input: one number
// output: even or odd
function isEven(number) {
    // if(number % 2 == 0) {
    //     return true;
    // }
    // return false;
    return number % 2 === 0;
}
console.log(isEven(9));



//function
//input: String
//output: firstCharacter
function firstCharacter(string) {
    return string[0];
}
console.log(firstCharacter("xyz"));


//function
//input: array, target (number)
//output: index of target if target is present in array if not return -1
function findTarget(array, target) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }
    return -1;
}

const nums = [3,4,5,4,7,24,6];
const indexOfTarget = findTarget(nums, 8);
console.log(indexOfTarget);

