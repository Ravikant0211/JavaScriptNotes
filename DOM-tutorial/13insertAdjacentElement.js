// elem.insertAdjacentHTML(where, html)
// beforebegin :- works like before
// afterbegin :- works like prepend
// beforeend :- works like append
// afterend :- works like after

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend", "<li> teach students </li>");