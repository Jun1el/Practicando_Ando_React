const API_KEY = '2via0hBn0CpJdXkqkTPh6VAW8tNS7CO7';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

/*myRequest
.then((response)=> {response.json().then(({data})=>{console.log(data);})})
.catch(console.warn)
.finally(()=> console.log("Termino la promesa"));

*/

myRequest.then( (response) => response.json() ).then(({data}) => { const imageUrl = data.images.original.url; console.log(imageUrl); const imgElement = document.createElement('img'); imgElement.src= imageUrl;document.body.append(imgElement); });
