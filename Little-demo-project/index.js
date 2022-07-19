const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".currentColor");


function randomColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = Math.floor(Math.random()*10)/10;
    const randomColor = `rgb(${red}, ${green}, ${blue}, ${alpha})`;
    return randomColor;
}

mainButton.addEventListener("click", function(){
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})