// function returning function

function myFunc() {
    // function hello() {
    //     return "I am hello function";
    // }
    // return hello; //ans will receive this returned function

    return function() {
        return "I am hello function";
    };
}

const ans = myFunc();
console.log(ans());