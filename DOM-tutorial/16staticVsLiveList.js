// static list vs live list
// querySelectorAll always gives us static list
// getElementsBy.... always gives us live list



// const listItems = document.querySelectorAll(".todo-list li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItems); //NodeList(5) [li, li, li, li, li] ---> this is static list


const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
ul.append(sixthLi);
console.log(listItems); //HTMLCollection(6) [li, li, li, li, li, li] ---> this is live list

// But recommended to use querrySelector over getElelementBy.....