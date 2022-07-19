// event bubbling
// event capturing
// event delegation


const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//capturing events
child.addEventListener("click", () => {
    console.log("captured !! child");
}, true);

parent.addEventListener("click", () => {
    console.log("captured !! parent");
}, true);

grandparent.addEventListener("click", () => {
    console.log("captured !! grandparent");
}, true);

document.body.addEventListener("click", () => {
    console.log("captured !! document.body");
}, true);



// Example for event bubbling
// child.addEventListener("click", () => {
//     console.log("you clicked on child");
// });

// parent.addEventListener("click", () => {
//     console.log("you clicked on parent");
// });

// grandparent.addEventListener("click", () => {
//     console.log("you clicked on grandparent");
// });

// document.body.addEventListener("click", () => {
//     console.log("you clicked on document.body");
// });


// =============== Event Delegation ====================
// const grandparent = document.querySelector(".grandparent");
// grandparent.addEventListener("click", (e) => {
//     // console.log(e.target);
//     console.log(e.target.textContent);
// })

