const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL) // fetch method is inbuilt method of javaScript which return a promise
        .then(response => {
            if(response.ok){
                return response.json(); // this method also return Promise
            }
            else {
                throw new Error("something went wrong");
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            // console.log("inside catch");
            console.log(error);
        })