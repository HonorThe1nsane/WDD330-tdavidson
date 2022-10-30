//Read from local storage

export function getFromLS(key){
    return JSON.parse(localStorage.getItem(key));
}

//Write to local storage

export function setToLS(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

//Event listener for each li item

export function bindClick(selector, callback) {
    const element = document.querySelector(selector);
    element.addEventListener("click", callback);
}