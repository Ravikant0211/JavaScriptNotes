// reduce

// const number = [1,2,3,4,5,10];

// aim: sum of all the numbers in array number

// const sum = number.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// console.log(sum);

//accumulator, currentValue, return 
// 1            2             3
// 3            3             6
// 6            4             10
// 10           5             15
// 15           10            25

const userCart = [
    {productId: 1, productName: "Mobile", price: 12000},
    {productId: 2, productName: "Laptop", price: 42000},
    {productId: 3, productName: "TV", price: 15000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0);

console.log(totalAmount);

//0 is initial value of 
// totalPrice , currentValue , return
// 0              {}            0+12000 = 12000
// 12000           {}           12000 + 42000 = 54000
// 34000          {}            54000 + 15000 = 69000