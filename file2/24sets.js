// What are Object sets
// Ans:- A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.
// no index-based access
// order is not guaranteed
// no duplicates are allowed
// it has its own methods
// it is iterable

// how to create set?

// const numbers = new Set([9,5,6,1,2,3,3,4]);
// console.log(numbers); 

// const items = ["item1", "item3"];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(["item1", "item2"]);
// numbers.add(["item1", "item3"]);
// numbers.add(items);
// console.log(numbers);

// Important methods of Set()
// new Set() -->	Creates a new Set
// add() -->	Adds a new element to the Set
// delete() -->	Removes an element from a Set
// has() -->	Returns true if a value exists
// clear() -->	Removes all elements from a Set
// forEach() -->	Invokes a callback for each element
// values() -->	Returns an Iterator with all the values in a Set
// keys() -->	Same as values()
// entries() -->	Returns an Iterator with the [value,value] pairs from a Set

// Property	Description
// size	--> Returns the number elements in a Set

// is Iterable??

// for(let number of numbers){
//     console.log(number);
// }

const myArray = [1,2,3,4,6,4,3,6,3,2];
const uniqueElements = new Set(myArray);
console.log(uniqueElements); //{1,2,3,4,6}
console.log(uniqueElements.size); // 5
