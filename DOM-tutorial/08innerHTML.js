// innerHTML

const headLine = document.querySelector(".headline");
// console.log(headLine.innerHTML);
headLine.innerHTML = "<h2>Inner html changed</h2>";
headLine.innerHTML += "<button class= \"btn\"> Learn More </button>";
console.log(headLine.innerHTML);