// const navItems = document.getElementsByTagName("a");
// console.log(navItems); //HTMLCollection(3) [a, a, a]

// simple for loop
// for loop
// forEach method :- can't use forEach method to iterate over HTML Collections

// ============= simple for loop =========================
// for(let i = 0; i < navItems.length; i++) {
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
//     navItem.style.padding = "5px 10px";
// }

// ============= for of loop =========================
// for(let navItem of navItems) {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
//     navItem.style.padding = "5px 10px";
// }

//=================== forEach method ===================
// we can use forEach method on array objects not on HTML Collections
// so, to use this method on HTML Collections, lets first convert HTML Collections to Array

// let navItems = document.getElementsByTagName("a");
// navItems = Array.from(navItems);
// navItems.forEach((navItem) =>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
//     navItem.style.padding = "5px 10px";
// });


//===================== querySelector(nodeList) =======================
// in case of nodeList we can use either of the following methods to iterate over nodeList
// 1. simple for loop
// 2. for of loop
// 3. forEach method

let navItems = document.querySelectorAll("a");

// =================== simple for loop ==================================
// for(let i = 0; i < navItems.length; i++) {
//         const navItem = navItems[i];
//         navItem.style.backgroundColor = "#fff";
//         navItem.style.color = "green";
//         navItem.style.fontWeight = "bold";
//         navItem.style.padding = "5px 10px";
// }



// ===================== for of loop =====================================

// for(let navItem of navItems) {
//         navItem.style.backgroundColor = "#fff";
//         navItem.style.color = "green";
//         navItem.style.fontWeight = "bold";
//         navItem.style.padding = "5px 10px";
// }

// ==================== forEach Method =================================
navItems.forEach((navItem) =>{
        navItem.style.backgroundColor = "#fff";
        navItem.style.color = "green";
        navItem.style.fontWeight = "bold";
        navItem.style.padding = "5px 10px";
});