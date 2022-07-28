//every method

// const numbers = [2,4,5,6,8,10];

// const ans = numbers.every((number) => number % 2 === 0);

// console.log(ans);

// callback function ----> true / false (boolean)
// every method  -----> true / false (boolean)

const userCart = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 500},
    {productId: 3, productName: "p3", price: 1200},
    {productId: 4, productName: "p4", price: 800},   
]

// function callback(cartItem) {
//     return cartItem.price <= 1200;
// }
// const isBelow = userCart.every(callback);
// console.log(isBelow);



// const isBelow = userCart.every(function (cartItem) {
//     return cartItem.price <= 1000;
// })
// console.log(isBelow);



// const isBelow = userCart.every((cartItem) => {
//     return cartItem.price <= 1000;
// })
// console.log(isBelow);


const isBelow = userCart.every( cartItem => cartItem.price <= 1000);
console.log(isBelow);
