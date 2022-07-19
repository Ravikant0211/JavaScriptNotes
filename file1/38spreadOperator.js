<<<<<<< HEAD
// Spread operator(...any_object_name)
// spread operator can be used only on iterables
// const array1 = [1,2,3];
// const array2 = [4,5,6];

// // const newarray = [...array1, ...array2, 69, 89];
// const newarray = [..."234567"];
// console.log(newarray);


// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key1: "value unique",
    key3: "value3",
    key4: "value4"
}

const newobject = {...obj2, ...obj1, key69: "value69"};
// const newobject = {..."abcd"};
// const newobject = {...["item1", "item2"]};
=======
// Spread operator(...any_object_name)
// spread operator can be used only on iterables
// const array1 = [1,2,3];
// const array2 = [4,5,6];

// // const newarray = [...array1, ...array2, 69, 89];
// const newarray = [..."234567"];
// console.log(newarray);


// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key1: "value unique",
    key3: "value3",
    key4: "value4"
}

// const newobject = {...obj2, ...obj1, key69: "value69"};
// const newobject = {..."abcd"};
const newobject = {...["item1", "item2"]};
>>>>>>> 245506c0649daf8040928746cd97fa789670a2a6
console.log(newobject);