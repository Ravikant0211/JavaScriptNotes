const allButtons = document.querySelectorAll(".my-buttons button");
for(let button of allButtons) {
    button.addEventListener("click", function(){
        console.log(this.textContent);
    });
}

// ============ simple for loop =================
// for(let i = 0; i < allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this.textContent);
//     });
// }

//============ forEach method ==============
// allButtons.forEach(function(botton){
//     botton.addEventListener("click", function(){
//                 console.log(this.textContent);
//             });
// })