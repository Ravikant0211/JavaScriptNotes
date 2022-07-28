//fi.ter method

// const number = [1,2,3,4,5,6,7];

// const isEven = function(number){
//     return number%2 == 0;
// }

// const evenNumber = number.filter((number) => {
//     return number%2 == 0;
// });
// console.log(evenNumber);

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

// const ages = [32, 33, 16, 40];

const userCart = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 500},
    {productId: 3, productName: "p3", price: 1200},
    {productId: 4, productName: "p4", price: 1000},   
]

const updatedCart = userCart.filter(function (user) {
    return user.price <= 1000;
})

updatedCart[1].price = 1500;

console.log(updatedCart);
console.log(userCart);

// this is happening because filter method creates a shallow copy of elements of an
// array, which are passing the test provided by the callback function.

//shallow copy:- The references of the elements of shallowed copy created by
// filter method will be same as those of source object/array.
// so if we try to change the properties of elements either in shallowed copy or 
// source object/array. it will cause changes in both source and shallowed copy objects.


