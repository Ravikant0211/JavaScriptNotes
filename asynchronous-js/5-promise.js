// Promise

console.log("Script starts from here");
const bucket = ['coffee', 'chips', 'vegetable', 'salt', 'rice'];

// creating a promise
const myPromise  = new Promise((resolve, reject)=>{
    if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice");
    } else {
        reject(new Error("Something missing from bucket"));
    }
})

// How to consume this promise
// myPromise.then(
//     (myFriedRice)=>{ //when promise is resolved
//         console.log("lets eat", myFriedRice);
//     },
//     (error)=>{ //when promise is rejected
//         console.log(error)
//     }
// )

myPromise.then(
    (myFriedRice)=>{ //when promise is resolved
        console.log("lets eat", myFriedRice);
    }
    ).catch(
        (error)=>{console.log(error)}
)

setTimeout(()=>{
    console.log("hello from inside setTimeout")
},0)

for(let i = 0; i <= 100; i++) {
    console.log(i);
}

console.log("script ends here")