
function dataset(key,arr){
    let data = JSON.stringify(arr);
    return localStorage.setItem(key,data);
}

function dataget(key){
    let data = localStorage.getItem(key);
    return JSON.parse(data);
}
