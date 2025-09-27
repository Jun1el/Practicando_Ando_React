import type { GiphyResponse } from "./data/giphy-response";
const API_KEY = '2via0hBn0CpJdXkqkTPh6VAW8tNS7CO7';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

const createImageInsideDom = (url:string)=>{
    const imgElement = document.createElement('img'); imgElement.src= url;
    document.body.append(imgElement);
}

const getImgUrl = async() => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
    const { data } : GiphyResponse = await response.json();
    return data.images.original.url;
}
//otra forma es asi 
// getImgUrl().then(createImageInsideDom);
getImgUrl().then( url => createImageInsideDom(url) );
/*
myRequest
.then( (response) => response.json() )
.then(({ data} : GiphyResponse) => { 
    const imageUrl = data.images.original.url;
    createImageInsideDom(imageUrl);
 });
*/