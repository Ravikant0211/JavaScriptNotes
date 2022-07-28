const URL = "https://jsonplaceholder.typicode.com/posts";

// async function getPosts() { // now this function will always return promise
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("something went wrong");
//     }
//     const data = await response.json();
//     return data;
// }

const getPosts = async () => {
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("something went wrong");
    }
    const data = await response.json();
    return data;
}

getPosts()
        .then((myData) => {console.log(myData)})
        .catch(error => console.log(error))


// fetch(URL)
//     .then(response => response.json())
//     .then(data => {console.log(data)});