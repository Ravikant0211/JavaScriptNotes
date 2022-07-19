// splice method ---> it changes the original array
// start, delete, insert

const arr = ["item1", "item2", "item3"];

//delete (also returns the deleted item)
// arr.splice(1, 1); // .splice(startIndex, how many items to be deleted, how many items to insert)
// console.log(arr); //['item1', 'item3']

//insert
// arr.splice(1, 0, "insertedItem");
// console.log(arr); //['item1', 'insertedItem', 'item2', 'item3']

//insert & delete together
const deletedItems = arr.splice(1, 2, "inserted item1", "inserted item2");
console.log(arr); //['item1', 'inserted item1', 'inserted item2']
console.log(deletedItems); //['item2', 'item3']