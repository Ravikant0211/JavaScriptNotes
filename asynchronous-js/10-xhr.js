
const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url)
        xhr.onload = () =>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }
            else {
                reject(new Error("something went wrong"))
            }
        }
        xhr.onerror = () => {
            reject(new Error("Network error"))
        }
        xhr.send();
    })
}

sendRequest('GET', URL)
    .then((response)=>{
        const data = JSON.parse(response);
        return data;
    })
    .then(data => {
        const id = data[3].id;
        return id;
    })
    .then(id => {
        const url = `${URL}/${id}`;
        return sendRequest('GET', url);
    })
    .then(response => {
        const data = JSON.parse(response);
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })

