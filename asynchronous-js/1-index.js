const id = setTimeout(() => {
    console.log("inside setTimeout");
}, 1000)

console.log(id);
clearTimeout(id); //it terminates the execution of setTimeout()