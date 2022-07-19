// functions inside function

function app() {
    const func = () => {
        console.log("my func");
    }

    const addTwo = (num1, num2) => {
        return num1 + num2;
    }

    const mul = (num1, num2) => num1*num2;

    console.log("inside app");
    func();
    console.log(addTwo(3, 4));   
    console.log(mul(4, 3));
}
app();
// func();