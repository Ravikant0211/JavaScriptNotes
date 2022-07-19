// clone using Object.assign

const obj = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {...obj};
const obj2 = Object.assign({}, obj); // old but one more way of cloning
obj.key3 = "value3";
console.log(obj);
console.log(obj2);