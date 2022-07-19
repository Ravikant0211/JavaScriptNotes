//every method

// const numbers = [2,4,5,6,8,10];

// const ans = numbers.every((number) => number % 2 === 0);

// console.log(ans);

// callback function ----> true / false (boolean)
// every method  -----> true / false (boolean)

const userCart = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 3000},
    {productId: 3, productName: "p3", price: 200},
    {productId: 4, productName: "p3", price: 8000},
    {productId: 5, productName: "p4", price: 500},
];

//chech if all products are below 30000

const isBelow = userCart.every((cartItem) => cartItem.price < 10000);
console.log(isBelow);
