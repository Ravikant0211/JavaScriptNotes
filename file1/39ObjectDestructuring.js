// Object destructuring

const band = {
    bandName: "led zeppelin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir"
};


// const bandName =  band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

// const {bandName, famousSong} = band;
// console.log(bandName);


// let {bandName, famousSong} = band;
// // bandName = "queen";
// console.log(bandName);
// console.log(bandName, famousSong);

// let {bandName: var1, famousSong: var2} = band;
// console.log(var1); //led zeppelin
// console.log(var2); //stairway to heaven

let {bandName, famousSong, ...restProps} = band;
console.log(bandName);   //led zeppelin
console.log(famousSong); //stairway to heaven
console.log(restProps); //{year: 1968, anotherFamousSong: 'kashmir'}