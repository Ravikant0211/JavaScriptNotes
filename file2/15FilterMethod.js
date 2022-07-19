//fi.ter method

const number = [1,2,3,4,5,6,7];

// const isEven = function(number){
//     return number%2 == 0;
// }

const evenNumber = number.filter((number) => {
    return number%2 == 0;
});
console.log(evenNumber);

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

const ages = [32, 33, 16, 40];
