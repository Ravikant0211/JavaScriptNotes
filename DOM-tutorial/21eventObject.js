// event Object
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(eventObject){
//     console.log(eventObject);
//     console.log(this);
// })

// whenever elementListener is added to any element
// js Engine --- executes code line by line
// browser ---- js Engine + extra features
// browser --- js Engine + Web APIs

// whenever a event is performed, the browser performs 2 tasks
// 1.) it returns callback function to js Engine
// 2.) it ruturn the event Oject to js Engine
// and js Engine executes the code line by line.



const allButtons = document.querySelectorAll(".my-buttons button");
for(let button of allButtons) {
    button.addEventListener("click", function(eventObject){
        // console.log(eventObject);
        console.log(eventObject.target);
        // console.log(eventObject.currentTarget);
    })
}