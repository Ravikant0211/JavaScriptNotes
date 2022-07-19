// Add new html elements to page

// innerHtml to Add html element
const todoList = document.querySelector(".todo-list");
// todoList.innerHTML = "<li>New Todo</li>";
// todoList.innerHTML += "<li> teach students </li>";


// when you should use it, when you should not.
// use it when you have to change entire html element.
// but if you want to change a part of the html element please dont use this way
// beacuse this creates performance issues.