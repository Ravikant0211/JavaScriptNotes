//sort 

// 5, 9, 1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected)

// const nums = [5, 9, 1200, 400, 3000];
// nums.sort();
// console.log(nums); //[1200, 3000, 400, 5, 9]
//this sort numbers as a string
// nums = [5, 9, 1200, 400, 3000]
// ASCII= [53, 57, 49, 52, 51]
// SORT = [49, 51, 52, 53, 57]
// SORTNUM = [1200, 3000, 400, 5, 9]

// const nums = [5, 9, 1200, 400, 3000];
// nums.sort((a,b) => {
//     return b-a;
// });
// console.log(nums);

//1200, 410
// a-b -----> positive(greater than 0)
// 410, 1200

//5, 9
// a-b -----> negative(lesser than 0)
// 5, 9

//for ascending order ----> return a-b
//for descending order -----> return b-a

//price lowToHigh HighToLow
const products = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 3000},
    {productId: 3, productName: "p3", price: 200},
    {productId: 4, productName: "p3", price: 8000},
    {productId: 5, productName: "p4", price: 500},
];

//LowToHigh
const lowToHigh = products.slice(0).sort((a,b) => {
    return a.price - b.price;
});
console.log(lowToHigh);

//highToLow
const highToLow = products.slice(0).sort((a,b) => {
    return b.price - a.price;
});
console.log(highToLow);
