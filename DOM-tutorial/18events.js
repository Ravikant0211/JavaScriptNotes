// intro to events
// click
// There are 3 ways to add an event

// 2) way No. 2
// const btn = document.querySelector(".btn-headline");
// console.dir(btn);
// btn.onclick = function(){
//     console.log("you clicked me!!");
// }

// 3) method:- AddEventListener (Recommended)
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", () => {
    console.log("you clicked me!!")
});