// fill method
// value, start, end

// const arr = new Array(5).fill(-1); 
// console.log(arr); //[-1, -1, -1, -1, -1]

const arr = [1,2,3,4,5,6,7,8];
arr.fill(-1, 2, 5); // arr.fill(value, startIndex, endIndex).
console.log(arr); //[1, 2, -1, -1, -1, 6, 7, 8]