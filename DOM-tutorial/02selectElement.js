// select element using get element by id

// console.log(document.getElementById("main-heading"));
// console.log(typeof document.getElementById("main-heading"));
// console.dir(document.getElementById("main-heading"));

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);


//================ select element using query selector =======================
const mainHeading = document.querySelector("#main-heading");
const header = document.querySelector(".header");
const navItems = document.querySelector(".nav-item");
const AllNavItem= document.querySelectorAll(".nav-item");
console.log(AllNavItem);
console.log(navItems);
console.log(header);
console.log(mainHeading);
