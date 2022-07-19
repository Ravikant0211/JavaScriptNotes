// clone nodes
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new Todo";
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);
//NOTE:- If you want to append and prepend the same element you have to clone 
// the element first then only you can do so.
