// this keyword

const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", function (){
    console.log("you clicked me!!")
    console.log("value of this:-")
    console.log(this);
});

// if we use arrow function here then the value of 'this' will be window object.
// if we use function expression then the value of 'this' will be same as btn.