// Callbacks, callback hell, pyramid of doom
// Asynchronous programming

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// setTimeout(() => {
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.textContent = "Heading 2";
//         heading2.style.color = "orange";
//     }, 1000);
// }, 1000);


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(() => {
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.textContent = "Heading 2";
//         heading2.style.color = "orange";
//     }, 1000);
// }, 1000);


function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        } else {
            onFailureCallback();
        }
        
    }, time)
}

// Callback hell, which is called pyramid of doom
changeText(heading1, "heading1", "violet", 1000, ()=>{
    changeText(heading2, "heading2", "red", 1000, ()=>{
        changeText(heading3, "heading3", "orange", 1000, ()=>{
            changeText(heading4, "heading4", "purple", 1000, ()=>{
                changeText(heading5, "heading5", "blue", 1000, ()=>{
                    changeText(heading6, "heading6", "green", 1000, ()=>{
                        changeText(heading7, "heading7", "cyan", 1000, ()=>{

                        }, ()=>{ console.log("heading7 does not exist") });
                    }, ()=>{ console.log("heading6 does not exist") });
                }, ()=>{ console.log("heading5 does not exist") });
            }, ()=>{ console.log("heading4 does not exist") });
        }, ()=>{ console.log("heading3 does not exist") });
    }, ()=>{ console.log("heading2 does not exist") });
}, ()=>{ console.log("heading1 does not exist") });