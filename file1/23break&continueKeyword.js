// break keyword


for(let i = 1; i <= 10; i++) {
    if(i === 4) {
        break; //come out of loop at line 10
    } 
    console.log(i);
}


console.log("###########################");
//continue keyword

for(let i = 1; i <= 10; i++) {
    if(i === 4) {
        continue; //skips 4
    }
    console.log(i);
}