// How to get the dimensions of element
// height 
// width

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
// const info = sectionTodo.getBoundingClientRect().height; //gives only height
console.log(info);