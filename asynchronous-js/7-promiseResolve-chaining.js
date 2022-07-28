// Promise.resolve => this method returns a promise
// Promise chaining

// const mypromise = Promise.resolve(5);
// mypromise.then((value)=>{console.log(value)});


// Promise.resolve(5).then((value)=>{console.log(value)});

// then() => then method always returns promise, it helps in promise chaining

// Promise Chaining
function myPromise(){
    return new Promise((resolve, reject)=>{
        resolve("foo");
    })
}

myPromise()
    .then((value)=>{
        console.log(value);
        value += "bar";
        // return value;
        return Promise.resolve(value);
    })
    .then((value)=>{
        console.log(value);
        value += "baaz";
        return value;
    })
    .then((value)=>{
        console.log(value);
        value += "foo";
        return value;
    })
    .then((value)=>{
        console.log(value);
        value += "zaar";
        return value;
    })


