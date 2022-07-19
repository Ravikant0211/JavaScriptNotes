// document.createElement()
// append
// prepend
// remove

// const newTodoItem = document.createElement("li");

// const newTodoItemText = document.createTextNode("Teach students");
// newTodoItem.append(newTodoItemText);

// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem); // append add at last
// todoList.prepend(newTodoItem); // prepend add at start


// remove an html element
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();

// before :- insert new element before the selected element
// after :- insert a new element after the selected element

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach students";
const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);
todoList.after(newTodoItem);