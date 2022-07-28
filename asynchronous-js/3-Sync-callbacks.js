// Synchronous callbacks 

function getTwoNumbersAndAdd(num1, num2, onSuccess, onFailure) {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        onSuccess(num1, num2);
    }
    else {
        onFailure();
    }
}

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// getTwoNumbersAndAdd("4", "5", addTwoNumbers);

getTwoNumbersAndAdd("4", 5, (number1, number2) => {
    console.log(number1 + number2);
}, () => {
    console.log("wrong data type!!");
    console.log("please Pass numbers only");
});
