// const rootNode = document.getRootNode();
// console.log(rootNode); // #document

// console.log(rootNode.childNodes); //NodeList [html]

// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);

// console.log(htmlElementNode.childNodes); //NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode);
// console.log(textNode1);
// console.log(bodyElementNode);

// parent relationship
// console.log(headElementNode.parentNode);

// sibling relationship
// console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextSibling.textContent);
// console.log(headElementNode.nextSibling.nextSibling);

// nextElementSibling property ignores the spaces and gives next sibling element.
// console.log(headElementNode.nextElementSibling);

// DOM traversing
// const h1 = document.querySelector("h1");
// const div = h1.parentNode.parentNode;
// div.style.color = "#efefef";
// div.style.backgroundColor = "#333";


// const body = document.body;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";


// const head = document.querySelector("head");
// const title = head.querySelector("title");
// console.log(title);

const container = document.querySelector(".container");
console.log(container.childNodes); //NodeList(5) [text, h1, text, p, text]
console.log(container.children); //HTMLCollection(2) [h1, p]