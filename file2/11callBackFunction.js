// callback function


function myFunc2(name) {
    console.log("inside my func 2");
    console.log(`your name is ${name}`)
}

function myFunc(callback) {
    console.log("hello there i am a func");
    // console.log(callback) //myFunc2() {
                    //     console.log("inside my func 2");
                    // }

    callback("Ravi kant");

}

myFunc(myFunc2);