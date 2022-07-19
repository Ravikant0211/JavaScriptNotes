// some method

// const nums = [2,3,4,5,6,8];

//is there any number which is even

// const ans = nums.some((num)=> num%2 === 0);
// console.log(ans); // true

const userCart = [
    {productId: 1, productName: "Mobile", price: 12000},
    {productId: 2, productName: "Laptop", price: 42000},
    {productId: 3, productName: "TV", price: 15000},
    {productId: 3, productName: "MacBook", price: 255000},
]

// is there any item whose price is exceeding 100000.
const ans = userCart.some(cartItem => cartItem.price > 100000);
console.log(ans); //yes